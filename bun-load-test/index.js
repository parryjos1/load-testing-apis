import { serve } from "bun";

const server = serve({
  port: 5001,
  routes: {
    "/": () => new Response("Welcome to Bun!"),
    "/health":  () => Response.json({ status: "ok" }),
  },
});

console.log(`Listening on localhost:${server.port}`);