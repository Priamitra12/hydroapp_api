const { Sequelize } = require('sequelize');
const sequelize = require('../config/dbConfig');
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import model
db.users = require('./userModel')(sequelize, Sequelize);

module.exports = db;

