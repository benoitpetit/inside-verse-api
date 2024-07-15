const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 80;

server.use(middlewares);

server.use((req, res, next) => {
  if (req.method === "GET") {
    next();
  } else {
    res.sendStatus(405);
  }
});

// random quotes
server.get("/quotes/random", (req, res) => {
  let quotes = router.db.get("quotes").value();
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.jsonp(randomQuote);
});

server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
