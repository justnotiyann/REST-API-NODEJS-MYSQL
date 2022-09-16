const Users = require("../models/Users");

const validateEmail = async (req, res, next) => {
	const email = req.body.email;
	const result = await Users.findOne({where: {email: email}});
	if (result) res.json({msg: "Email sudah terdaftar harap coba lagi"});
	next();
};

module.exports = {validateEmail};
