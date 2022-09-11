const Users = require('../models/Users')

const getUsers = async (req, res) => {
			try {
				const result = await Users.findAll({})
				if (!result) res.json({
					msg: 'Error'
				})
				res.json({
						msg: 'Data semua user',
						responses: [result]
						'})
					}
					catch (e) {
						console.log(e)
					}
				}


				const addUser = async (req, res) => {
							const body = req.body
							const result = await Users.create({
								...req.body
							})
							if (!result) res.json({
								msg: 'Error'
							})
							res.json({
										msg: 'Data semua user',
										responses: [result]
										'})
									}
