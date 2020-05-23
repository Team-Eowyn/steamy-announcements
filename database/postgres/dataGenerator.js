const fs = require('fs');
const faker = require('faker');
// const db = require('./index.js');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
// const fastcsv = require('fast-csv');
const {format} = require('@fast-csv/format');
const csvStream = format({ headers: true });

const rateOptions = [true, false, null];
const filler = { 0: 'event', 1: 'announcement' };
const thumbnails = [
  'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/36225228/efee37e07322802794443f01eda517422f667887_960x311.jpg',
  'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/6144970/310e75fdaf03de839ba6f8bd3656bfd0cd408724_960x311.jpg',
  'https://steamcdn-a.akamaihd.net/steam/apps/15100/header.jpg?t=1532007211',
  'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/35210272/1d23fd0d78c84916ed943ae0410cd77adb6eff46.jpg',
  'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/36260268/0201fd67aef0968802adc9c24473860baa3f39ab_960x311.jpg',
  'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/36260268/31e792edea8b4d5a9c5e4cbbc85ba024445dd07f_960x311.jpg',
  'https://steamcdn-a.akamaihd.net/steam/apps/10150/0000008861.600x338.jpg?t=1534443367',
  'https://steamcdn-a.akamaihd.net/steam/apps/10150/0000008853.600x338.jpg?t=1534443367',
  'https://steamcdn-a.akamaihd.net/steam/apps/13500/header.jpg?t=1447351266',
];

const announcementGen = () => {
  // writer.pipe(fs.createWriteStream('announcements.csv'));
  const pipe1 = fs.createWriteStream('announcements.csv');
  csvStream.pipe(pipe1).on('end', () => {
    console.log('Done generating announcements');
  });
  const categories = ['event', 'announcement'];
  for (var i = 0; i < 1000; i++) {
    const randomIndex = Math.floor(Math.random() * 2);
    const commentCount = Math.floor(Math.random() * 50);
    const rateDown = rateOptions[(Math.floor(Math.random() * 3))];
    const rateUp = (rateDown === null) ? null : !rateDown;

    // writer.write({
      csvStream.write({
      // id: announcementCounter++,
      id: i,
      title: faker.lorem.sentence().slice(0, 50),
      postDate: faker.date.recent(),
      body: faker.lorem.paragraphs().slice(0, 1000),
      category: (i <= 1) ? ((i === 0) ? filler[0] : filler[1]) : categories[randomIndex],
      url: faker.internet.url(),
      thumbnailUrl: thumbnails[Math.floor(Math.random() * thumbnails.length)],
      rateUp,
      rateDown,
      commentCount,
      likes: Math.floor(Math.random() * 100)
    });
  }
  csvStream.end();
  // writer.end();
  // console.log('Done generating announcements');
};

announcementGen();

const GameGen = () => {
  writer.pipe(fs.createWriteStream('games.csv'));
  const announcements = [];
  const announcementsCount = Math.floor((Math.random() * 10) + 1);
  var start = new Date().getTime();
  for (var i = 0; i < 10000000; i++) {
    writer.write({
      gameNumber: i,
      name: faker.lorem.words().slice(0, 30),
      image: faker.image.image(),
      announcements: announcements,
      url: faker.internet.url()
    });
  }
  writer.end();
  const elapsed = new Date().getTime() - start;
  console.log('Done generating games! Duration (ms): ', elapsed);
};

GameGen();



