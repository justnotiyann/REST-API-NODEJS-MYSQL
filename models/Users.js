const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db')

const Users = db.define('Users', {
  nama: {
    type: DataTypes.STRING
  },
  email:{
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  alamat:{
    type: DataTypes.STRING
  },
  nomor_hp:{
    type: DataTypes.STRING
  }
},{
   freezeTableName: true,
    timestamps: false,
});

const result  = Users.sync({})
if(!result) throw error
console.log('Berhasil membuat database')

module.exports = Users
