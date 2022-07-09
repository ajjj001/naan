// import { routes } from "../routes.js";

export const parseRoutes = (routes) => {
    const parsedRoutes = [];
    routes.forEach(route => {
        const [method, path, handler] = route.split(" ");
        const [controller, action] = handler.split(".");

        if (!method || !path || !controller || !action) {
            throw new Error(`Invalid route: ${route}`);
        }

        parsedRoutes.push({
            method,
            path,
            handler: require(`../controllers/${controller}`)[action]
        });
    });
    return parsedRoutes;
}
