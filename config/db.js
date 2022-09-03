const { Sequelize } = require('sequelize');
require('dotenv').config()


const db = new Sequelize('REST-API-NODEJS', 'root', '', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

const result = db.sync({});
if(!result) throw error
console.log('Ok koneksi berjalan')

module.exports = db
