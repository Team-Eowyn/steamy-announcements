const fs = require('fs');
const faker = require('faker');
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
const categories = ['event', 'announcement'];

const dataGen = () => {
  const ws = fs.createWriteStream('data.csv');
  csvStream.pipe(ws).on('end', () => {
    console.log('Done generating data!');
  });

  var start = new Date().getTime();
  let i = 10000000;
  let id = 0;

  var writeGame = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const announcements = [];
      const announcementsCount = Math.floor((Math.random() * 5) + 1);

      for (let j = 0; j < announcementsCount; j++) {
        const randomIndex = Math.floor(Math.random() * 2);
        const commentCount = Math.floor(Math.random() * 50);
        const rateDown = rateOptions[(Math.floor(Math.random() * 3))];
        const rateUp = (rateDown === null) ? null : !rateDown;

        const announcement = {
          id: j,
          title: faker.lorem.sentence().slice(0, 50),
          postDate: faker.date.recent(),
          body: faker.lorem.paragraphs().slice(0, 500),
          category: (i <= 1) ? ((i === 0) ? filler[0] : filler[1]) : categories[randomIndex],
          url: faker.internet.url(),
          thumbnailUrl: thumbnails[Math.floor(Math.random() * thumbnails.length)],
          rateUp,
          rateDown,
          commentCount,
          likes: Math.floor(Math.random() * 100)
        };
        announcements.push(announcement);
      }

      const data = {
        gameNumber: i,
        name: faker.lorem.words().slice(0, 30),
        image: faker.image.image(),
        announcements: JSON.stringify(announcements),
        url: faker.internet.url()
      };

      if (i === 0) {
        csvStream.write(data, () => {
          csvStream.end();
          const elapsed = new Date().getTime() - start;
          console.log('Done generating games! Duration (ms): ', elapsed); //3114958 = ~52 min
        });
      } else {
        //write will return false when highWaterMark (limit) is reached
        ok = csvStream.write(data);
      }
    } while (i > 0 && ok);
    if (i > 0) {  //still more games to write
      //write more after it drains
      csvStream.once('drain', writeGame);
    }
  };
  writeGame();


  // for (var i = 0; i < 100000; i++) {  //change to 10000000

  //   var announcements = [];
  //   var announcementsCount = Math.floor((Math.random() * 5) + 1);
  //   for (var j = 0; j < announcementsCount; j++) {
  //     const randomIndex = Math.floor(Math.random() * 2);
  //     const commentCount = Math.floor(Math.random() * 50);
  //     const rateDown = rateOptions[(Math.floor(Math.random() * 3))];
  //     const rateUp = (rateDown === null) ? null : !rateDown;

  //     var announcement = {
  //       id: j,
  //       title: faker.lorem.sentence().slice(0, 50),
  //       postDate: faker.date.recent(),
  //       body: faker.lorem.paragraphs().slice(0, 500),
  //       category: (i <= 1) ? ((i === 0) ? filler[0] : filler[1]) : categories[randomIndex],
  //       url: faker.internet.url(),
  //       thumbnailUrl: thumbnails[Math.floor(Math.random() * thumbnails.length)],
  //       rateUp,
  //       rateDown,
  //       commentCount,
  //       likes: Math.floor(Math.random() * 100)
  //     };
  //     announcements.push(announcement);
  //   }
  //   csvStream.write({
  //     gameNumber: i,
  //     name: faker.lorem.words().slice(0, 30),
  //     image: faker.image.image(),
  //     announcements: JSON.stringify(announcements),
  //     url: faker.internet.url()
  //   });
  // }
  // csvStream.end();
  // const elapsed = new Date().getTime() - start;
  // console.log('Done generating games! Duration (ms): ', elapsed);
};

dataGen();




