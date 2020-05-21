/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.connect('mongodb://localhost:27017/steamy-announcements', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (err) => {
  // eslint-disable-next-line no-console
  console.error('Connection Failed: ', err);
});

db.once('open', () => {
  // eslint-disable-next-line no-console
  console.log('Successfully connected to MongoDB');
});

const announcementsSchema = new Schema({
  title: String,
  postDate: Date,
  body: String,
  category: String,
  url: String,
  thumbnailUrl: String,
  rateUp: Boolean,
  rateDown: Boolean,
  commentCount: Number,
  likes: Number,
});

// const commentSchema = new Schema({
//   username: String,
//   postDate: Date,
//   commentBody: String,
// });


const gameSchema = new Schema({
  gameNumber: { type: Number, required: true },
  name: { type: String, unique: true },
  image: String,
  title: String,
  announcements: [announcementsSchema],
  url: String,
});

const Game = mongoose.model('games', gameSchema);

module.exports = {
  Game,
  getAllGames: (callback) => {
    Game.find((err, data) => {
      if (err) {
        // eslint-disable-next-line no-console
        callback(err);
      } else {
        callback(null, data);
      }
    });
  },
  getGame: ({ _id }, callback) => {
    Game.findOne({ gameNumber: _id }, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  },
  updateAnnouncement: ({
    announcementId, rateUp, rateDown,
  }, callback) => {
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

    Game.findOneAndUpdate(
      { 'announcements._id': announcementId },
      {
        $set:
        {
          'announcements.$.rateUp': rateUp,
          'announcements.$.rateDown': rateDown,
        },
        $inc:
      { 'announcements.$.likes': value },
      }, (err, data) => {
        if (err) {
          callback(err);
        } else {
          callback(null, data);
        }
      },
    );
  },
};
