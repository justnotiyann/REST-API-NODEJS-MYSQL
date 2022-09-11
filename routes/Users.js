const router = require("express").Router();
const Users = require("../controllers/Users");

router.get("/", Users.getIndex);
router.get("/detail", Users.getUsers);
router.post("/add", Users.addUser);
router.post("/edit/:id", Users.editUser);
router.get("/delete/:id", Users.deleteUser);

module.exports = router;
