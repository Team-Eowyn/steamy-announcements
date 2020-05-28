/* eslint-disable no-undef */
const puppeteer = require('puppeteer');

const pageUrl = 'http://localhost:8080/';

let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width}, ${height}`],
    devtools: true,
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});

afterAll(() => {
  browser.close();
});

describe('component exists', () => {
  beforeEach(async () => {
    await page.goto(pageUrl, { waitUntil: 'networkidle2' });
  });

  test('checks if component <Announcements /> exists based on it\'s text contents', async () => {
    const div = '#Announcements';
    const componentText = await page.$eval(div, (e) => e.textContent);
    expect(componentText).toEqual('THUMBNAIL SECTIONHack Reactor: Heroes is Now Available');
  });
});
