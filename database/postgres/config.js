const { Client } = require('pg');

// set up configuration of postgres connection
const client = new Client({
  user: 'postgres', // created user with no password in psql
  host: 'localhost',
  database: 'announcements', // created database in psql
  port: 5432, // default TCP port for PostgreSQL is 5432
});

client.connect()
  .then(() => {
    console.log('Successfully connected to Postgres');
  })
  .catch((err) => {
    console.log('Unable to connect to the database: ', err);
  });

module.exports = client;

// create database announcements, table games in psql (shell)