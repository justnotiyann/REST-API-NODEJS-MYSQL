const router = require("express").Router();
const Admin = require("../middleware/Auth");

router.post("/add", Admin.signUp);
router.post("/login", Admin.login);

module.exports = router;
