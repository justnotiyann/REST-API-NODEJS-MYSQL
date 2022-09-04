const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db')


const Products = db.define('Products', {
  judul_buku: DataTypes.STRING,
  penulis: DataTypes.STRING,
  genre: DataTypes.STRING,
  jenis_buku:DataTypes.STRING,
  penerbit:DataTypes.STRING
},{
   freezeTableName: true,
    timestamps: false,
});

const result  = Products.sync({})
if(!result) throw error
console.log('Berhasil membuat database')

module.exports = Products
