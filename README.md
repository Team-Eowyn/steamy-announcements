# Announcements
This is the Announcements component for the System Design Capstone done at Hack Reactor.

## Getting Started

<!-- npm install -g webpack -->
```sh
npm install
npm run build
npm run seed
npm run start
```

## Running the tests

```sh
npm run test
```

## Built With

* [axios](https://www.npmjs.com/package/axios) - HTTP client for browser and node.js
* [express](https://expressjs.com/) - web framework used
* [mongoose](https://mongoosejs.com/) - ORM for database

## CRUD
<!-- Todo: API calls for POST and DELETE -->
<!-- PATCH instead of PUT -->

| Http Verbs | Endpoint     | Action                                 | Error ?            |
|------------|--------------|----------------------------------------|--------------------|
| POST       | /createGame  | Creates a game with announcements      |                    |
| GET        | /getGame     | Gets a list of reviews for 1 game      | Error: Bad Request |
| GET        | /randomGame  | Gets all games, then picks 1 at random |                    |
| PATCH      | /updateLikes | Updates a review for 1 game            | Error: Bad Request |
| DELETE     | /deleteGame  | Deletes a game with its announcements  |                    |

<!-- old readme:
git push origin :old-name new-name
LINTER: npx install-peerdeps --dev eslint-config-airbnb
// delete branches from the terminal rather than on gitHub -->