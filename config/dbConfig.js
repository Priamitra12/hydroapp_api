const { Sequelize } = require('sequelize');

// Konfigurasi database
const sequelize = new Sequelize('hydroapp', 'youruser', 'StrongP@ssw0rd!', {
    host: '34.129.67.22',
    dialect: 'mysql',
    operatorsAliases: 0,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;

