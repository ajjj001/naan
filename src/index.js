import { parseRoutes } from "./parseRoutes";
import { createRouter } from "radix3";

export class App {
  constructor() {
    this.router = createRouter();
  }

  use(method, path, handler) {
    this.router.insert(`${method} ${path}`, { handler });
  }

  useRoutes(routesFile) {
    const routes = require(`../routes/${routesFile}`);
    const parsedRoutes = parseRoutes(routes.default);

    parsedRoutes.forEach((route) => {
      const { method, path, handler } = route;
      if (path && handler) {
        this.use(method, path, handler);
      }
    });
  }

  fetch = (req) => {
    const { pathname } = new URL(req.url);
    const method = req.method;
    const matchedRoute = this.router.lookup(`${method} ${pathname}`);

    if (matchedRoute) {
      req = matchedRoute;
      return matchedRoute.handler(req);
    }

    return new Response(`${pathname} Not Found`, { status: 404 });
  };

  serve(port) {
    this.server = Bun.serve({
      port,
      fetch: (req) => this.fetch(req),
    });
  }
}
