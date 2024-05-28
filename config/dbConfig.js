const { Sequelize } = require('sequelize');

// Konfigurasi database
const sequelize = new Sequelize('hydroapp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: 0,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = sequelize;

