import { App } from "./src";

const app = new App();

app.use("GET", "/", (req) => {
  return new Response("Hello World!");
});

app.use("GET", "/v1/**", (req) => {
  return new Response("Wild card route");
});

app.use("POST", "/v1/users", (req) => {
  return new Response("POST /v1/users");
});

app.use("GET", "/method", (req) => {
  return new Response(req.method);
});

// Using users routes File in routes folder
app.useRoutes("users");

app.serve(3000);
