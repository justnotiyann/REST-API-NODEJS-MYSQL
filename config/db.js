const { Sequelize } = require("sequelize");
require("dotenv").config();

console.log();

const db = new Sequelize(process.env.DATABASE, process.env.USER_DATA, process.env.PASS, {
  host: process.env.HOST,
  dialect: process.env.DIALECT /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
});

const result = db.sync({});
if (!result) throw error;
console.log("Ok koneksi berjalan");

module.exports = db;
