const db = require('./config.js');
const { createFakeData } = require('../faker.js');

const getAllGames = (callback) => {
  db.query('SELECT * FROM games') // remove ;
    .then((res) => callback(null, res))
    .catch((err) => callback(err));
};

const getGame = ({ _id }, callback) => {
  db.query(`SELECT * FROM games WHERE gameNumber = ${_id}`)
    .then((res) => callback(null, res))
    .catch((err) => callback(err));
};

const updateAnnouncement = ({ announcementId, rateUp, rateDown }, callback) => {
  let value;
  (rateUp) ? value = 1 : value = -1;

  if (rateUp === 'reset') {
    value = -1;
    rateUp = null;
  }

  if (rateDown === 'reset') {
    value = 1;
    rateDown = null;
  }

  if (rateDown === 'doubleReset') {
    value = 2;
    rateDown = null;
  }

  if (rateUp === 'doubleReset') {
    value = -2;
    rateUp = null;
  }

  // Game.findOneAndUpdate(
  //   { 'announcements._id': announcementId },
  //   {
  //     $set:
  //     {
  //       'announcements.$.rateUp': rateUp,
  //       'announcements.$.rateDown': rateDown,
  //     },
  //     $inc:
  //   { 'announcements.$.likes': value },
  //   }, (err, data) => {
  //     if (err) {
  //       callback(err);
  //     } else {
  //       callback(null, data);
  //     }
  //   },
  // );
};

const patchGame = ({ id, name }, callback) => {
  const findOneAndUpdateQuery = `UPDATE games SET name = ${name} WHERE gameNumber = ${id}`;

  db.query(findOneAndUpdateQuery)
    .then((res) => callback(null, res))
    .catch((err) => callback(err));
  // Game.findOneAndUpdate(
  //   { gameNumber: id },
  //   { $set: { name } },
  //   (err, data) => {
  //     if (err) {
  //       callback(err);
  //     } else {
  //       callback(null, data);
  //     }
  //   },
  // );
};

// yuri's CRUD:
const postGame = (req, res) => {
  const data = req.body.data || createFakeData(); // req.body?

  const query = `INSERT INTO games VALUES (${data.name}, ${data.image}, ${JSON.stringify(data.announcements)}, ${data.url}, ${data.gameNumber});`;
  db.query(query)
    .then(() => {
      res.send(`${data.gameNumber} has been posted`);
    })
    .catch((err) => {
      console.log('ERROR: ', err);
    });

  // db.Game.create(data, (err) => {
  //   if (err) {
  //     console.log('ERROR: ', err);
  //   } else {
  //     res.send(`${data.gameNumber} has been posted`);
  //   }
  // });
};

const getGameWithId = (req, res) => {
  getGame({ _id: req.params.id }, (err, data) => {
    if (err) {
      res.send(400);
    } else {
      res.send(data);
    }
  });
};

const patchGameWithId = (req, res) => {
  patchGame({
    id: req.params.id, name: req.body.name,
  }, (err, data) => {
    if (err) {
      res.send(400);
    } else {
      getGame({ _id: req.params.id }, (err, data) => {
        if (err) {
          res.send(400);
        } else {
          res.send(data);
        }
      });
    }
  });
};

const deleteGame = (req, res) => {
  const query = `DELETE FROM games WHERE gameNumber = ${req.params.id};`;
  db.query(query)
    .then((data) => res.send(data))
    .catch(() => res.send(400));
  // db.Game.remove({ gameNumber: req.params.id }, (err, data) => {
  //   if (err) {
  //     res.send(400);
  //   } else {
  //     res.send(data);
  //   }
  // });
};

module.exports = {
  getAllGames,
  getGame,
  updateAnnouncement,
  patchGame,
  postGame,
  getGameWithId,
  patchGameWithId,
  deleteGame,
};
