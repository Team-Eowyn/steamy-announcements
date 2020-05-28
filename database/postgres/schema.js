const db = require('./config.js');

const createTableQuery = `CREATE TABLE IF NOT EXISTS games (
  gameNumber integer PRIMARY KEY,
  name VARCHAR (50) NOT NULL,
  image VARCHAR (50) NOT NULL,
  announcements TEXT,
  url VARCHAR (50) NOT NULL
);`;
// text --> variable unlimited length
// varchar (n) --> variable-length with limit
// problem: announcements is just a long string, instead an array of announcements
  // --> unpack in controllers? separate seed file for announcements?

db.query(createTableQuery)
  .then(() => {
    console.log('games table created!');
  })
  .catch((err) => {
    console.log(err);
  });
