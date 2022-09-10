const router = require("express").Router();
const Products = require("../controllers/Products");
const upload = require("../config/multer");

router.get("/", Products.getHome);
router.get("/detail", Products.getProducts);
router.post("/add", upload.single("avatar"), Products.addProducts);
router.delete("/delete/:id", Products.deleteProducts);
router.post("/update/:id", Products.updateProducts);
module.exports = router;
