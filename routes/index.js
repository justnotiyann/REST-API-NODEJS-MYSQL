var router = require("express").Router();
const Products = require("../models/Products");
const { getProducts, addProducts } = require("../controllers/Products");

module.exports = router;
