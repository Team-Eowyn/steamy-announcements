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

| Http Verbs | Endpoint    | Action                                 |
|------------|-------------|----------------------------------------|
| POST       | /game       | Creates a game with announcements      |
| GET        | /game/:id   | Gets a game with specified id          |
| GET        | /randomGame | Gets all games, then picks 1 at random |
| PATCH      | /game/:id   | Updates name of game with specified id |
| DELETE     | /game/:id   | Deletes game with specified id         |

<!-- old readme:
git push origin :old-name new-name
LINTER: npx install-peerdeps --dev eslint-config-airbnb
// delete branches from the terminal rather than on gitHub -->