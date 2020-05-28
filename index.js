/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/index.js');
const { createFakeData } = require('./database/faker.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(express.static('public'));

app.get('/randomGame', (req, res) => {
  db.getAllGames((err, data) => {
    if (err) {
      res.send(400);
    } else {
      const len = data.length;
      const random = Math.floor(Math.random() * len);
      res.send(data[random]);
    }
  });
});

app.get('/getGame', (req, res) => {
  let { _id } = req.query;

  // workaround for a supertest GET request
  // supertest query data is stored at req.body
  if (_id === undefined) {
    _id = req.body._id;
  }

  db.getGame({ _id }, (err, data) => {
    if (err) {
      res.send(400);
    } else {
      res.send(data);
    }
  });
});

app.patch('/updateLikes', (req, res) => {
  const {
    gameNumber, announcementId, rateUp, rateDown,
  } = req.body;
  db.updateAnnouncement({
    gameNumber, announcementId, rateUp, rateDown,
  }, (err, data) => {
    if (err) {
      res.send(400);
    } else {
      db.getGame({ _id: gameNumber }, (err, data) => {
        if (err) {
          res.send(400);
        } else {
          res.send(data);
        }
      });
    }
  });
});

// yuri's CRUD:
app.post('/game', (req, res) => {
  const data = req.body.data || createFakeData();
  db.Game.create(data, (err) => {
    if (err) {
      console.log('ERROR: ', err);
    } else {
      res.send(`${data.gameNumber} has been posted`);
    }
  });
});

app.get('/game/:id', (req, res) => {
  db.getGame({ _id: req.params.id }, (err, data) => {
    if (err) {
      res.send(400);
    } else {
      res.send(data);
    }
  });
});

app.patch('/game/:id', (req, res) => {
  db.patchGame({
    id: req.params.id, name: req.body.name,
  }, (err, data) => {
    if (err) {
      res.send(400);
    } else {
      db.getGame({ _id: req.params.id }, (err, data) => {
        if (err) {
          res.send(400);
        } else {
          res.send(data);
        }
      });
    }
  });
});

app.delete('/game/:id', (req, res) => {
  db.Game.remove({ gameNumber: req.params.id }, (err, data) => {
    if (err) {
      res.send(400);
    } else {
      res.send(data);
    }
  });
});

module.exports = app;
