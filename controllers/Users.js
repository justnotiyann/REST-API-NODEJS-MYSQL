const Users = require("../models/Users");
const argon2 = require("argon2");

const getIndex = (req, res) => {
	res.json("Hello vroh");
};

const getUsers = async (req, res) => {
	try {
		const result = await Users.findAll({});
		if (!result) res.json("Terjadi kesalahan");
		res.json({msg: "Data semua users", result});
	} catch (e) {
		throw e;
	}
};

const addUser = async (req, res) => {
	try {
		const body = req.body;
		const hash = await argon2.hash(req.body.password);
		const result = await Users.create({...req.body, password: hash});
		if (!result) res.json("Terjadi kesalahan");
		res.json({msg: "Berhasil menambah data", result});
	} catch (e) {
		throw e;
	}
};

const editUser = async (req, res) => {
	try {
		const id = req.params.id;
		const body = req.body;
		const hash = await argon2.hash(req.body.password);
		const result = await Users.update(
			{...req.body, password: hash},
			{where: {id: id}}
		);
		if (!result) res.json("Terjadi kesalahan");
		res.json({msg: "Berhasil edit data"});
	} catch (e) {
		throw e;
	}
};

const deleteUser = async (req, res) => {
	const id = req.params.id;
	const body = req.body;
	const result = await Users.destroy({where: {id: id}});
	if (!result) res.json("Data gagal dihapus");
	res.json({msg: "Data berhasil dihapus !"});
};
module.exports = {getUsers, addUser, getIndex, editUser, deleteUser};
