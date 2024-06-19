const express = require("express")
const router = express.Router()

/* GET home page. */
router.get("/", async function (req, res, next) {
	try {
		const { q, k, type } = req.query
		let url = `https://tastedive.com/api/similar?k=${k}&q=${q}&type=${type}`
		const response = await fetch(url)
		const data = await response.json()
		res.json(data)
	} catch (error) {
		res.json(error.message)
	}
})

module.exports = router
