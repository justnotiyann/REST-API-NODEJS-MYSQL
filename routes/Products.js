const router = require("express").Router();
const { getProducts, addProducts, deleteProducts, updateProducts } = require("../controllers/Products");

router.get("/", (req, res) => {
  res.json("Hai vroh");
});

router.get("/detail", getProducts);
router.get("/add", addProducts);
router.delete("/delete/:id", deleteProducts);
router.post("/update/:id", updateProducts);

module.exports = router;
