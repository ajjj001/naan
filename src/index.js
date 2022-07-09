import { parseRoutes } from "./parseRoutes";
import { createRouter } from "radix3";

export class App {
  constructor() {
    this.router = createRouter();
  }

  use(path, handler) {
    this.router.insert(path, { handler });
  }

  useRoutes(routesFile) {
    const routes = require(`../routes/${routesFile}`);
    const parsedRoutes = parseRoutes(routes.default);

    parsedRoutes.forEach((route) => {
      const { path, handler } = route;
      if (path && handler) {
        this.router.insert(path, { handler });
      }
    });
  }

  fetch = (req) => {
    const { pathname } = new URL(req.url);

    const matchedRoute = this.router.lookup(pathname);

    if (matchedRoute) {
      req = matchedRoute;
      return matchedRoute.handler(req);
    }

    return new Response(`${pathname} Not Found`, { status: 404 });
  };

  serve(port) {
    this.server = Bun.serve({
      port,
      fetch: this.fetch.bind(this),
    });
  }
}
