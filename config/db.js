const {Sequelize} = require("sequelize");
require("dotenv").config();

console.log();

const db = new Sequelize(
	process.env.DATABASE,
	process.env.USER_DATA,
	process.env.PASS,
	{
		host: process.env.HOST,
		dialect:
			process.env.DIALECT /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
	}
);

// db.sync({});

module.exports = db;
