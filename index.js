import { App } from "./src";

const app = new App();

app.use("/", (req) => {
  return new Response("Hello World!");
});

app.use("/v1/**", (req) => {
  return new Response("Wild card route");
});

app.use("/method", (req) => {
  return new Response(req.method);
});

// Using users routes File in routes folder
app.useRoutes("users");

app.serve(3000);
