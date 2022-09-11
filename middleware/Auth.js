const Admin = require("../models/Admins");
const argon2 = require("argon2");

const signUp = async (req, res) => {
	try {
		const body = req.body;
		const hash = await argon2.hash(req.body.password);
		const result = await Admin.create({...req.body, password: hash});
		if (!result) res.json({msg: "Gagal membuat data"});
		res.json({msg: "Berhasil membuat data", result});
	} catch (e) {
		throw e;
	}
};

const login = async (req, res) => {
	try {
		const result = await Admin.findOne({where: {email: req.body.email}});
		if (result != null) {
			const verify = await argon2.verify(result.password, req.body.password);
			if (verify) {
				res.json("oke benar");
			} else {
				res.json("Salah password");
			}
		} else {
			res.json("email tidak ditemukan");
		}
	} catch (e) {
		throw e;
	}
};

module.exports = {signUp, login};
