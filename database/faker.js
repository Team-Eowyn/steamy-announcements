/* eslint-disable no-nested-ternary */
const faker = require('faker');
// const db = require('./index.js');

const rateOptions = [true, false, null];

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

const filler = { 0: 'event', 1: 'announcement' };
let counter = 1;

const produceAnnouncements = () => {
  const announcements = [];
  const categories = ['event', 'announcement'];
  const announcementsCount = Math.floor((Math.random() * 10) + 1);
  for (let i = 0; i < announcementsCount; i += 1) {
    const randomIndex = Math.floor(Math.random() * 2);
    const commentCount = Math.floor(Math.random() * 50);
    const rateDown = rateOptions[(Math.floor(Math.random() * 3))];
    const rateUp = (rateDown === null) ? null : !rateDown;

    announcements.push({
      title: faker.lorem.sentence().slice(0, 50),
      postDate: faker.date.recent(),
      body: faker.lorem.paragraphs().slice(0, 1000),
      // category: (i <= 1) ? filler[i] : categories[randomIndex],
      category: (i <= 1) ? ((i === 0) ? filler[0] : filler[1]) : categories[randomIndex],
      url: faker.internet.url(),
      thumbnailUrl: thumbnails[Math.floor(Math.random() * thumbnails.length)],
      rateUp,
      rateDown,
      commentCount,
      likes: Math.floor(Math.random() * 100),
    });
  }
  return announcements;
};

const createFakeData = () => {
  const allAnnouncements = produceAnnouncements();

  const data = {
    name: faker.lorem.words().slice(0, 30),
    image: faker.image.image(),
    announcements: allAnnouncements,
    url: faker.internet.url(),
    gameNumber: counter,
  };
  return data;
};

// for (let i = 0; i < 100; i += 1) {
//   db.Game.create(createFakeData(), (err) => {
//     if (err) {
//       // eslint-disable-next-line no-console
//       console.error('ERROR: ', err);
//     }
//   });
//   counter += 1;
// }

const curatedData = {
  name: 'Half-Life: Alyx',
  image: null,
  url: 'https://store.steampowered.com/app/546560/HalfLife_Alyx/',
  gameNumber: 237,
  announcements: [
    {
      title: 'The Half-Life: Alyx Workshop is now open',
      postDate: '2020-05-11T13:34:12.918Z',
      body: `We are excited to announce the launch of the Half-Life: Alyx Soundtrack. Today we are releasing Chapter 1. Entanglement, which includes 9 tracks in both MP3 (320K) and FLAC formats. We will be releasing all 11 chapters of the soundtrack over the next few months on Steam. If you purchase the soundtrack, it will update with each release and you will get the new chapters automatically in your Steam Library.

      More about the Half-Life: Alyx Soundtrack:

      Following the story and locations of Half-Life: Alyx, the soundtrack evolves and combines industrial, electronic, experimental and orchestral cinematic pieces, alternating between abstract environmental, emotional soundscapes and direct action-oriented cues.

      Owners of Half-Life: Alyx get 25% off for a limited time.'`,
      category: 'announcement',
      url: 'https://store.steampowered.com/newshub/app/546560/view/3758762298552654077',
      thumbnailUrl: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/36225228/736f048f8383eaed73eb7af122002ddb881f604b_960x311.png',
      rateUp: true,
      rateDown: null,
      commentCount: 72,
      likes: 911,
    },
    {
      title: 'Half-Life: Alyx Soundtrack - Chapter 1 Now Available',
      postDate: '2020-06-11T13:34:12.918Z',
      body: `We are excited to announce the launch of the Half-Life: Alyx Soundtrack. Today we are releasing Chapter 1. Entanglement, which includes 9 tracks in both MP3 (320K) and FLAC formats. We will be releasing all 11 chapters of the soundtrack over the next few months on Steam. If you purchase the soundtrack, it will update with each release and you will get the new chapters automatically in your Steam Library.

      More about the Half-Life: Alyx Soundtrack:

      Following the story and locations of Half-Life: Alyx, the soundtrack evolves and combines industrial, electronic, experimental and orchestral cinematic pieces, alternating between abstract environmental, emotional soundscapes and direct action-oriented cues.

      Owners of Half-Life: Alyx get 25% off for a limited time.`,
      category: 'announcement',
      url: 'https://store.steampowered.com/newshub/app/546560/view/2216278054498706006',
      thumbnailUrl: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/36225228/2a83236bbd5cb9b143b8d7f68e59d740b80d1f33_960x311.png',
      rateUp: null,
      rateDown: null,
      commentCount: 42,
      likes: 55,
    },
    {
      title: 'Half-Life: Alyx is Now Available',
      postDate: '2019-06-11T13:34:12.918Z',
      body: 'It\'s here. Half-Life: Alyx, Valve\'s long-awaited return to the Half-Life series, is NOW AVAILABLE to play. Compatible with all PC-based VR headsets, the game has been designed from the ground up for virtual reality. Half-Life: Alyx can be purchased from the Steam store and is available for download and play immediately.',
      category: 'announcement',
      url: 'https://store.steampowered.com/newshub/app/546560/view/1818831582752497162',
      thumbnailUrl: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/36225228/efee37e07322802794443f01eda517422f667887_960x311.jpg',
      rateUp: null,
      rateDown: true,
      commentCount: 441,
      likes: 889,
    },
    {
      title: 'Half-Life: Alyx Announce Trailer',
      postDate: '2020-07-11T13:34:12.918Z',
      body: `On Monday March 9th, the Valve Index VR system will be made available again for purchase after having been out of stock for some time. Recent demand for the Index system has been high, so we do expect that available stock on hand will sell out quickly. We will continue to take orders after those units have been sold, so purchases beyond this initial quantity will be fulfilled in the order in which they are received, as supplies increase over the coming months. The exact time that the Valve Index will be made available on Monday is 10:00 AM Pacific (5:00 PM UTC).

      If you already own a Valve Index, or have ordered one, the bonus Half-Life: Alyx preview locations have just been released and are now accessible to you via Steam VR Home. Starting now, you can download and visit two locations from the game, before the game comes out on March 23rd. One is an outdoor space taken from City 17 in the shadow of the under-construction Citadel. The other is Russell's laboratory, where he helps Alyx make plans to take on the Combine. The rendering technology available in SteamVR's native environments is different than that in Half-Life: Alyx, and the interactivity is significantly lower than what the game itself provides. So while these scenes do not have quite as much fidelity as they will in the actual game, we think they are a faithful enough translation to provide a fun VR preview of the game's setting.

      If you don't own a Valve Index but would like to check these environments out in VR before March 23rd, you can ask an Index owner to host a SteamVR Home session for you.`,
      category: 'event',
      url: 'https://store.steampowered.com/newshub/app/546560/view/1626291914403966643',
      thumbnailUrl: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/36225228/b3fb476c9ae8cb7f67f74904e91a5e5d147f69d1_960x311.png',
      rateUp: null,
      rateDown: null,
      commentCount: 111,
      likes: 521,
    },
  ],
};

// db.Game.create(curatedData, (err) => {
//   if (err) {
//     // eslint-disable-next-line no-console
//     console.error('ERROR: ', err);
//   }
// });

module.exports = {
  createFakeData,
};
