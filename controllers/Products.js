const Products = require("../models/Products");
// CREATE READ UPDATE DELETE

const getProducts = async (req, res) => {
  const result = await Products.findAll({});
  if (!result) res.json({ msg: "Gagal ambil data woi !, cek lagi dah" });
  if (result >= 0) res.json({ msg: "Data belum ada bwanggg" });
  res.json(result);
};

const addProducts = async (req, res) => {
  const { judul_buku, penulis, genre, jenis_buku, penerbit } = req.body;
  const result = await Products.create({
    judul_buku: judul_buku,
    penulis: penulis,
    genre: genre,
    jenis_buku: jenis_buku,
    penerbit: penerbit,
  });
  if (!result) res.json({ msg: "Gagal buat data woi !, cek lagi bolot" });
  res.json({
    msg: "Data berhasil ditambahkan",
    result,
  });
};

const deleteProducts = async (req, res) => {
  const id = req.params.id;
  const idData = await Products.findOne({ where: { id: id } });
  if (!idData) res.json({ msg: "Data tidak ditemukan" });
  const result = await Products.destroy({
    where: { id: id },
  });
  if (!result) res.json({ erorr: 500, msg: "Terjadi kesalahan" });
  res.json({
    msg: "Berhasil hapus data",
  });
};

const updateProducts = async (req, res) => {
  const id = req.params.id;
  const { judul_buku, penulis, genre, jenis_buku, penerbit } = req.body;
  const idData = await Products.findOne({ where: { id: id } });
  if (!idData) res.json({ msg: "Data tidak ditemukan" });
  const result = await Products.update(
    {
      judul_buku: judul_buku,
      penulis: penulis,
      genre: genre,
      jenis_buku: jenis_buku,
      penerbit: penerbit,
    },
    { where: { id: id } }
  );
  if (!result) res.json({ msg: "Terjadi kesalahan" });
  res.json({
    msg: "BBerhasil edit data",
  });
};

module.exports = { getProducts, addProducts, deleteProducts, updateProducts };
