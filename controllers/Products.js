const Products = require('../models/Products')

const getProducts = async(req,res) =>{
  const result = await Products.findAll({})
  if(!result) res.json({msg:'Gagal ambil data woi !, cek lagi dah'})
  if(result >= 0) res.json({msg:'Data belum ada bwanggg'})
  res.send(result)
}

const addProducts = async(req,res) =>{
  const {judul_buku,penulis,genre,jenis_buku,penerbit} = req.body
  const result = await Products.create({
    judul_buku:judul_buku,
    penulis:penulis,
    genre:genre,
    jenis_buku:jenis_buku,
    penerbit:penerbit,
  })
  if(!result) res.json({msg:'Gagal buat data woi !, cek lagi bolot'})
  res.json({msg:"Berhasil dong siapa duluu 😎"})
}

module.exports = {getProducts,addProducts}
