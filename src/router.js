// class Router {
//     constructor() {
//         this.router = createRouter();
//     }


//     useRoutes(routesFile) {
//         const routes = require(`../routes/${routesFile}`);
//         const parsedRoutes = parseRoutes(routes.default);

//         parsedRoutes.forEach((route) => {
//             const { path, handler } = route;
//             if (path && handler) {
//                 this.router.insert(path, { handler });
//             }
//         });
//     }


// }