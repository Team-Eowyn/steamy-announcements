// var promise = require('bluebird');
// var options = {
//   promiseLib: promise
// };

// const options = {
//   error: function (error, e) {
//       if (e.cn) {
//           // A connection-related error;
//           console.log("CN:", e.cn);
//           console.log("EVENT:", error.message);
//       }
//   }
// };
// const
// const pgp = require("pg-promise")(options);
// const db = pgp('postgres://localhost:8081/steamy-announcements');

// db.connect()
//   .then(function (obj) {
//       obj.done(); // success, release connection;
//       console.log('Successfully connected to Postgres');
//   })
//   .catch(function (error) {
//       console.log("ERROR:", error.message);
//   });

// require('dotenv').config({path: '../../.env'});
const { Sequelize } = require('sequelize');
// const db = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASS}@localhost:5432/cartgames`);
const db = new Sequelize('postgres://localhost:8081/steamy-announcements');

//authenticate is sequelize function to test connection
db.authenticate()
  .then( err => {
    console.log('Successfully connected to Postgres');
  })
  .catch( err => {
    console.log('Unable to connect to the database: ', err);
  });

// const connection = async () => {
//   try {
//     await db.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }
// connection();



//mongo announcementsSchema, gameSchema, game Model, query methods:

// const announcementsSchema = new Schema({
//   title: String,
//   postDate: Date,
//   body: String,
//   category: String,
//   url: String,
//   thumbnailUrl: String,
//   rateUp: Boolean,
//   rateDown: Boolean,
//   commentCount: Number,
//   likes: Number,
// });

// const gameSchema = new Schema({
//   gameNumber: { type: Number, required: true },
//   name: { type: String, unique: true },
//   image: String,
//   title: String,
//   announcements: [announcementsSchema],
//   url: String,
// });

// const Game = mongoose.model('games', gameSchema);

// module.exports = {
//   Game,
//   getAllGames: (callback) => {
//     Game.find((err, data) => {
//       if (err) {
//         // eslint-disable-next-line no-console
//         callback(err);
//       } else {
//         callback(null, data);
//       }
//     });
//   },
//   getGame: ({ _id }, callback) => {
//     Game.findOne({ gameNumber: _id }, (err, data) => {
//       if (err) {
//         callback(err);
//       } else {
//         callback(null, data);
//       }
//     });
//   },
//   updateAnnouncement: ({
//     announcementId, rateUp, rateDown,
//   }, callback) => {
//     let value;
//     (rateUp) ? value = 1 : value = -1;

//     if (rateUp === 'reset') {
//       value = -1;
//       rateUp = null;
//     }

//     if (rateDown === 'reset') {
//       value = 1;
//       rateDown = null;
//     }

//     if (rateDown === 'doubleReset') {
//       value = 2;
//       rateDown = null;
//     }

//     if (rateUp === 'doubleReset') {
//       value = -2;
//       rateUp = null;
//     }

//     Game.findOneAndUpdate(
//       { 'announcements._id': announcementId },
//       {
//         $set:
//         {
//           'announcements.$.rateUp': rateUp,
//           'announcements.$.rateDown': rateDown,
//         },
//         $inc:
//       { 'announcements.$.likes': value },
//       }, (err, data) => {
//         if (err) {
//           callback(err);
//         } else {
//           callback(null, data);
//         }
//       },
//     );
//   },
//   patchGame: ({
//     id, name,
//   }, callback) => {
//     Game.findOneAndUpdate(
//       { 'gameNumber': id },
//       { $set: { 'name' : name} },
//       (err, data) => {
//         if (err) {
//           callback(err);
//         } else {
//           callback(null, data);
//         }
//       },
//     );
//   },
// };
