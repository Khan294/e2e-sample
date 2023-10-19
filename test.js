
const request = require('supertest');
const { Sequelize: mockSequelize } = require('sequelize');

jest.mock('./app/dbConnector', () => ({ primaryDB: new mockSequelize('sqlite::memory:', { logging: false })}));

const { primaryDB } = require('./app/dbConnector');
const { app, server } = require('./server');
const { User } = require('./app/model');

beforeAll(async () => {
  await primaryDB.sync({ force: true });
  // seedBaseTables();
});

test('Increments user visit', async () => {
  const response = await request(app).get('/increment-visit/1');
  expect(response.statusCode).toBe(200);

  const user = await User.findByPk(1);
  expect(user.visit).toBe(1);
});

afterAll((done) => {
  server.close((err) => {
    if (err) { console.error('Error while closing the server:', err) } 
    else { console.log('Server has been closed.') }
    done();
  });
});