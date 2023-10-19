
const { Sequelize } = require('sequelize');

let primaryDB;

if (process.env.DATABASE_URL) {
  primaryDB = new Sequelize(process.env.DATABASE_URL);
} 
else {
  throw new Error("Database URL not found in environment variables. The site is not properly configured.");
}

module.exports = { primaryDB };