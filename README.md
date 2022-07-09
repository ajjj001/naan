
# naan

Opinionated mini web library for Bun (POC)

## Demo
Routes need to be in the routes folder
Controllers need to be in the controllers folder

## Demo
```js
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

```

## License

[MIT](https://choosealicense.com/licenses/mit/)
