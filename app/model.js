const { DataTypes } = require('sequelize');
const { primaryDB } = require('./dbConnector');

const User = primaryDB.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  visit: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = { User };