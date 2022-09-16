const {Sequelize, DataTypes} = require("sequelize");
const db = require("../config/db");

const Users = db.define(
	"Users",
	{
		nama: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.STRING,
		alamat: DataTypes.STRING,
		nomor_hp: DataTypes.STRING
	},
	{
		freezeTableName: true,
		timestamps: false
	}
);

// const result = Users.sync({});
// if (!result) throw error;
// console.log("Berhasil membuat database");

module.exports = Users;
