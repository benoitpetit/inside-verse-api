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

// Helper function to get a random item from an array
const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

server.get("/quotes/random", (req, res) => {
  const db = router.db; // Lowdb instance
  const quotes = db.get("quotes").value();
  const characters = db.get("characters").value();
  const episodes = db.get("episodes").value();

  if (quotes.length > 0) {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const character = characters.find((c) => c.id === randomQuote.character_id);
    const episode = episodes.find((e) => e.id === randomQuote.episode_id);

    res.jsonp({
      ...randomQuote,
      character_name: character ? character.name : "Unknown",
      episode_name: episode ? episode.name : "Unknown Episode",
    });
  } else {
    res.status(404).jsonp({ error: "No quotes found" });
  }
});

// Random character
server.get("/characters/random", (req, res) => {
  const characters = router.db.get("characters").value();
  const randomCharacter = getRandomItem(characters);
  res.jsonp(randomCharacter);
});

// Random organization
server.get("/organizations/random", (req, res) => {
  const organizations = router.db.get("organizations").value();
  const randomOrganization = getRandomItem(organizations);
  res.jsonp(randomOrganization);
});

// Random technology
server.get("/technologies/random", (req, res) => {
  const technologies = router.db.get("technologies").value();
  const randomTechnology = getRandomItem(technologies);
  res.jsonp(randomTechnology);
});

// Get quotes for a specific character
server.get("/characters/:id/quotes", (req, res) => {
  const characterId = parseInt(req.params.id);
  const quotes = router.db
    .get("quotes")
    .filter({ character_id: characterId })
    .value();
  res.jsonp(quotes);
});

// Get characters related to a specific conspiracy
server.get("/conspiracies/:id/characters", (req, res) => {
  const conspiracyId = parseInt(req.params.id);
  const conspiracy = router.db
    .get("conspiracies")
    .find({ id: conspiracyId })
    .value();
  if (conspiracy && conspiracy.related_character_ids) {
    const characters = router.db
      .get("characters")
      .filter((char) => conspiracy.related_character_ids.includes(char.id))
      .value();
    res.jsonp(characters);
  } else {
    res
      .status(404)
      .jsonp({ error: "Conspiracy not found or has no related characters" });
  }
});

// Get episodes featuring a specific character
server.get("/characters/:id/episodes", (req, res) => {
  const characterId = parseInt(req.params.id);
  const character = router.db
    .get("characters")
    .find({ id: characterId })
    .value();
  if (character && character.episode_ids) {
    const episodes = router.db
      .get("episodes")
      .filter((ep) => character.episode_ids.includes(ep.id))
      .value();
    res.jsonp(episodes);
  } else {
    res
      .status(404)
      .jsonp({ error: "Character not found or has no related episodes" });
  }
});

// Get technologies related to a specific location
server.get("/locations/:id/technologies", (req, res) => {
  const locationId = parseInt(req.params.id);
  const location = router.db.get("locations").find({ id: locationId }).value();
  if (location && location.related_technology_ids) {
    const technologies = router.db
      .get("technologies")
      .filter((tech) => location.related_technology_ids.includes(tech.id))
      .value();
    res.jsonp(technologies);
  } else {
    res
      .status(404)
      .jsonp({ error: "Location not found or has no related technologies" });
  }
});

server.get("/ping", (req, res) => {
  const now = new Date();
  const response = {
    message: "pong",
    timestamp: now.toISOString(),
    date: now.toLocaleDateString(),
    time: now.toLocaleTimeString(),
    http: {
      method: req.method,
      url: req.url,
      responseStatus: res.statusCode,
    },
  };
  res.jsonp(response);
});

server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
