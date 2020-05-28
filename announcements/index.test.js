/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
require('regenerator-runtime/runtime');
const mongoose = require('mongoose');
const supertest = require('supertest');

const database = 'fec';
const app = require('./index.js');

const request = supertest(app); // this is now essentially the server for testing

beforeAll(async () => {
  const url = `mongodb://127.0.0.1/${database}`;
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
});


describe('test if the server is functioning properly', () => {
  test('should make a GET request to the server', async (done) => { // using async
    const res = await request.get('/randomGame');
    expect(res.statusCode).toBe(200);
    done();
  });

  test('should find a specific game', async (done) => { // using async
    const res = await request.get('/getGame').set('accept', /json/).send({ _id: '5eb23f22086cf5841ff73048' });
    expect(JSON.stringify(res.body)).not.toBe('{}');
    done();
  });

  test('should return an error on a GET request with wrong data', async (done) => { // using async
    const res = await request.get('/getGame').set('accept', /json/).send({ _id: '5eb23f22086cf5841ff7914' });
    expect(JSON.stringify(res.statusCode)).toBe('400');
    done();
  });

  test('should successfully update a user like for a specific announcement', async (done) => { // using async
    const res = await request.patch('/updateLikes').set('accept', /json/).send({
      gameId: '5eb23f22086cf5841ff73034', announcementId: '5eb23f22086cf5841ff73035', rateUp: true, rateDown: false,
    }); // WHERE IS THE DOC FOR THIS?
    expect(res.body._id).toBe('5eb23f22086cf5841ff73034');
    expect(res.body.announcements[0]._id).toBe('5eb23f22086cf5841ff73035');
    expect(res.body.announcements[0].rateUp).toBe(true);
    expect(res.body.announcements[0].rateDown).toBe(false);
    done();
  });

  test('should successfully update a user like for a specific announcement', async (done) => { // using async
    const res = await request.patch('/updateLikes').set('accept', /json/).send({
      gameId: '5eb23f22086cf5841ff73034', announcementId: '5eb23f22086cf5841ff73035', rateUp: false, rateDown: true,
    });
    expect(res.body._id).toBe('5eb23f22086cf5841ff73034');
    expect(res.body.announcements[0]._id).toBe('5eb23f22086cf5841ff73035');
    expect(res.body.announcements[0].rateUp).toBe(false);
    expect(res.body.announcements[0].rateDown).toBe(true);
    done();
  });

  test('should return an error on a PATCH request with incomplete data', async (done) => { // using async
    const res = await request.patch('/updateLikes').set('accept', /json/).send({
      gameId: '5eb23f22086cf5841ff73034', announcementId: '5eb23f22086cf5841ff7293', rateUp: false, rateDown: true,
    });
    expect(JSON.stringify(res.statusCode)).toBe('400');
    done();
  });
});
