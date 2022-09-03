const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db')

const Products = db.define('Products', {
  judul_buku: {
    type: DataTypes.STRING
  },
  penulis:{
    type: DataTypes.STRING
  },
  genre: {
    type: DataTypes.STRING
  },
  jenis_buku:{
    type: DataTypes.STRING
  },
  penerbit:{
    type: DataTypes.STRING
  }
},{
   freezeTableName: true,
    timestamps: false,
});

const result  = Products.sync({})
if(!result) throw error
console.log('Berhasil membuat database')

module.exports = Products
