# Inside Verse API

---

![Inside Verse API](/public/header.webp)

## Access the world of "Inside Job" through our API

- > API Base URL : [https://inside-verse-api.p.rapidapi.com](https://inside-verse-api.p.rapidapi.com)
- > Website : [https://inside-verse-api.com](https://inside-verse-api.com)
- > Documentation : [https://rapidapi.com/110benp/api/inside-verse-api](https://rapidapi.com/110benp/api/inside-verse-api)
- > Get API Key : [Get your API Key with RapidAPi](https://docs.rapidapi.com/docs/keys-and-key-rotation)

## Overview

The Inside Verse API opens up the vibrant universe of the "Inside Job" series, offering developers access to a rich collection of quotes and dialogues from the show's colorful characters. Whether you're building fan applications, looking for entertaining content, or seeking creative inspiration, our API provides a gateway to the unique humor and storytelling of "Inside Job".

## Endpoints

| **Category**   | **Method** | **Endpoint**                          | **Description**                                      |
|----------------|------------|---------------------------------------|------------------------------------------------------|
| **Characters** | GET        | `/characters/{id}`                    | Retrieve specific character details by ID.           |
|                | GET        | `/characters/{id}/episodes`           | Get episodes featuring a specific character by ID.   |
|                | GET        | `/characters/random`                  | Fetch a random character.                            |
|                | GET        | `/characters/{id}/quotes`             | Obtain quotes by a specific character ID.            |
|                | GET        | `/characters`                         | List all characters.                                 |
| **Organizations** | GET    | `/organizations/random`               | Get a random organization.                           |
|                | GET        | `/organizations/{id}`                 | Retrieve specific organization details by ID.        |
|                | GET        | `/organizations`                      | List all organizations.                              |
| **Locations**  | GET        | `/locations/{id}/technologies`        | Get technologies available at a specific location by ID. |
|                | GET        | `/locations`                          | List all locations.                                  |
|                | GET        | `/locations/{id}`                     | Retrieve specific location details by ID.            |
| **Conspiracies** | GET      | `/conspiracies/{id}/characters`       | List characters involved in a specific conspiracy by ID. |
|                | GET        | `/conspiracies/{id}`                  | Retrieve specific conspiracy details by ID.          |
|                | GET        | `/conspiracies`                       | List all conspiracies.                               |
| **Technologies** | GET      | `/technologies/{id}`                  | Retrieve specific technology details by ID.          |
|                | GET        | `/technologies`                       | List all technologies.                               |
|                | GET        | `/technologies/random`                | Fetch a random technology.                           |
| **Episodes**   | GET        | `/episodes/{id}`                      | Retrieve specific episode details by ID.             |
|                | GET        | `/episodes`                           | List all episodes.                                   |
| **Quotes**     | GET        | `/quotes/{id}`                        | Retrieve specific quote details by ID.               |
|                | GET        | `/quotes`                             | List all quotes.                                     |
|                | GET        | `/quotes/random`                      | Fetch a random quote.                                |
| **Ping**       | GET        | `/ping`                               | Check the API's availability and response.           |


## Quick Start

To get started with the Inside Verse API, you'll need to sign up for a free RapidAPI account and subscribe to the API. Once you have your API key, you can start making requests to the API endpoints.

### JavaScript Example

```javascript
const url = "https://inside-verse-api.p.rapidapi.com/characters/random";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "YOUR_RAPIDAPI_KEY",
    "x-rapidapi-host": "inside-verse-api.p.rapidapi.com",
  },
};

async function fetchRandomCharacter() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchRandomCharacter();
```

### cURL Example

```shell
curl --request GET \
     --url https://inside-verse-api.p.rapidapi.com/characters/random \
     --header 'x-rapidapi-host: inside-verse-api.p.rapidapi.com' \
     --header 'x-rapidapi-key: YOUR_RAPIDAPI_KEY'
```

## Learn More

For detailed documentation, endpoint descriptions, and more examples, visit our [RapidAPI page](https://rapidapi.com/110benp/api/inside-verse-api)

## Support the Project

If you find this API useful, consider supporting its development:

[buymeacoffee.com/benoitpetit](https://buymeacoffee.com/benoitpetit)

---

© 2023 Inside Verse API. All rights reserved.

This project is not affiliated with or endorsed by the creators of "Inside Job". All trademarks and copyrights belong to their respective owners.

Made with ❤️ by benoitpetit.dev
