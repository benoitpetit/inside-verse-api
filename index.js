const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);

server.use((req, res, next) => {
  if (req.method === "GET") {
    next();
  } else {
    res.sendStatus(405);
  }
});

server.use(router);

server.listen();
