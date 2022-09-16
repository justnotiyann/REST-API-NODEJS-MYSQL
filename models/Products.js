const {Sequelize, DataTypes} = require("sequelize");
const db = require("../config/db");

const Products = db.define(
	"Products",
	{
		title: DataTypes.STRING,
		author: DataTypes.STRING,
		avatar: DataTypes.STRING
	},
	{
		freezeTableName: true,
		timestamps: false
	}
);

// const result = Products.sync({});
// if (!result) throw error;
// console.log("Berhasil membuat database");

module.exports = Products;
