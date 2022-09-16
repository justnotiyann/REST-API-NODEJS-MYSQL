const router = require("express").Router();
const Users = require("../controllers/Users");
const validate = require("../middleware/Validator");

router.get("/", Users.getIndex);
router.get("/detail", Users.getUsers);
router.post("/add", validate.validateEmail, Users.addUser);
router.post("/edit/:id", Users.editUser);
router.delete("/delete/:id", Users.deleteUser);

module.exports = router;
