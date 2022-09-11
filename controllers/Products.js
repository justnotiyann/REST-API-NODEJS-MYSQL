const Products = require("../models/Products");

const getHome = async (req, res) => {
  res.json("Hai");
};

const getProducts = async (req, res) => {
  const result = await Products.findAll({});
  if (!result) res.json({ msg: "Gagal ambil data woi !, cek lagi dah" });
  if (result >= 0) res.json({ msg: "Data belum ada bwanggg" });
  res.json(result);
};

const getProductsById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Products.findAll({ where: { id: id } });
    if (!result) res.json({ msg: "Data tidak ditemukan" });
    res.json(result);
  } catch (e) {
    res.json(e);
  }
};

const addProducts = async (req, res) => {
  const { title, author } = req.body;
  if (req.file.mimetype === "image/jpeg" || req.file.mimetype === "image/jpg" || req.file.mimetype === "image/png") {
    const result = await Products.create({
      title: title,
      author: author,
      avatar: req.file.path,
    });
    if (!result) res.json("Gagal membuat data");
    res.json({
      msg: "Data berhasil ditambahkan",
      result,
    });
  } else {
    res.json({ msg: "Format tidak didukung, Pastikan hanya JPEG,JPG,PNG" });
  }
};

const deleteProducts = async (req, res) => {
  const id = req.params.id;
  const idData = await Products.findOne({ where: { id: id } });
  if (!idData) res.json({ msg: "Data tidak ditemukan" });
  const result = await Products.destroy({
    where: { id: id },
  });
  if (!result) res.json({ msg: "Terjadi kesalahan" });
  res.json({
    msg: "Berhasil hapus data",
  });
};

const updateProducts = async (req, res) => {
  const id = req.params.id;
  const { title, author } = req.body;
  const idData = await Products.findOne({ where: { id: id } });
  if (!idData) res.json({ msg: "Data tidak ditemukan" });
  const result = await Products.update(
    {
      title: title,
      author: author,
      avatar: req.file.path,
    },
    { where: { id: id } }
  );
  if (!result) res.json({ msg: "Terjadi kesalahan" });
  res.json({
    msg: "BBerhasil edit data",
  });
};

module.exports = { getHome, getProducts, addProducts, deleteProducts, updateProducts, getProductsById };
