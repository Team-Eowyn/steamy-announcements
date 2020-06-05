const db = require('./config.js');

// const copyQuery = `COPY games(gameNumber,name,image,announcements,url) FROM '/Users/yurikim/Documents/GitHub/steamy-announcements/data.csv' WITH (DELIMITER ',', HEADER, FORMAT csv);`;

const copyQuery = `COPY games(gameNumber,name,image,announcements,url) FROM '../../data.csv' WITH (DELIMITER ',', HEADER, FORMAT csv);`;

db.query(copyQuery, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log('success', res.rows);
  }
});
// error: must be superuser or a member of the pg_read_server_files role to COPY from a file --> ALTER USER postgres WITH SUPERUSER;
