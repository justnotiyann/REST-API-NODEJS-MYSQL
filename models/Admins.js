const {Sequelize, DataTypes} = require("sequelize");
const db = require("../config/db");

const Admins = db.define(
	"Admins",
	{
		email: DataTypes.STRING,
		password: DataTypes.STRING
	},
	{
		freezeTableName: true,
		timestamps: false
	}
);

const result = Admins.sync({});
if (!result) throw error;
console.log("Berhasil membuat database");

module.exports = Admins;
