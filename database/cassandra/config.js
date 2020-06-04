const { Client } = require('cassandra-driver');

// set up configuration of cassandra connection
const client = new Client({
  contactPoints: ['localhost'], // must be in array format, alternative to localhost = '127.0.0.1'
  localDataCenter: 'datacenter1', // ?
  keyspace: 'announcements', // database
});

client.connect((err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log('cassandra db connected!');
  }
});

module.exports = client;
