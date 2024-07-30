# Inside Verse API

## Base URL : [https://inside-verse-api.com](https://inside-verse-api.com)

![Inside Verse API](/public/header.webp)

Step into the immersive world of the "Inside Job" series with the "InsideVerseAPI." This API provides seamless access to a treasure trove of quotes, dialogues, and memorable lines from your beloved characters. Unearth the wit, wisdom, and humor that define the essence of "Inside Job." Whether you're seeking entertainment or inspiration, "InsideVerseAPI" is your gateway to the rich tapestry of storytelling within the "Inside Job" universe.

## Available Routes

```
  GET    /quotes
  GET    /quotes/1
  GET    /quotes/random
  GET    /quotes?_limit=20
  GET    /quotes?character_id=1
  GET    /quotes?episode_id=1

  GET    /characters
  GET    /characters/1
  GET    /characters?_limit=3
  GET    /characters?_embed=quotes

  GET    /organizations
  GET    /organizations/1
  GET    /organizations?_limit=4
  GET    /organizations?related_conspiracy_ids_like=1

  GET    /episodes
  GET    /episodes/1
  GET    /episodes?season=2
  GET    /episodes?season=1&episode=2
  GET    /episodes?_embed=quotes

  GET    /locations
  GET    /locations/1
  GET    /locations?first_appearance_episode_id=1

  GET    /conspiracies
  GET    /conspiracies/1
  GET    /conspiracies?related_organization_ids_like=3

  GET    /technologies
  GET    /technologies/1
  GET    /technologies?creator_like=Reagan%20Ridley
```

# Advanced Usage

Filtering

You can filter results using query parameters:

```
GET /episodes?character_ids_like=1
GET /episodes?location_ids_like=1
GET /episodes?technology_ids_like=1
```

Sorting

Sort results using the _sort and _order parameters:

```
GET /episodes?_sort=episode&_order=asc
```

Pagination

Use _page and _limit for pagination:

```
GET /episodes?_page=2&_limit=10
```

Full-text Search

Perform a full-text search across all fields:

```
GET /episodes?q=Reptoid
```

Embedding Related Resources

You can embed related resources using the _embed parameter:

```
GET /episodes?_embed=quotes
GET /characters?_embed=quotes
```

For more detailed information on using these features, [https://inside-verse-api.com](https://inside-verse-api.com) OR refer to the JSON Server documentation.

Help me here ❤️ : [https://patreon.com/benoitpetit](https://patreon.com/benoitpetit)


---

© 2023 Inside Verse API. All rights reserved.

All trademarks referenced herein are the properties of their respective owners.

Made with ❤️ by benoitpetit.dev
