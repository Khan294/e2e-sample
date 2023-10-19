const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const router = require('./app/controller');

app.use(express.json());

app.use('/', router);

const server = app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = { app, server };