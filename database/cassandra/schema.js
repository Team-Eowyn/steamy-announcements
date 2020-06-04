const db = require('./config.js');

const createTableQuery = `CREATE TABLE IF NOT EXISTS games (
  gameNumber int PRIMARY KEY,
  name varchar,
  image varchar,
  announcements text,
  url varchar
);`;

db.execute(createTableQuery)
  .then(() => {
    console.log('games table created!');
  })
  .catch((err) => {
    console.log(err);
  });
