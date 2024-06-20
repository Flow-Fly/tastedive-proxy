const express = require("express")
const router = express.Router()
const axios = require("axios")

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
router.get("/wikiart", async function (req, res, next) {
	try {
		let url = `https://www.wikiart.org/en/App/Painting/PaintingsByArtist`
		const params = new URLSearchParams(req.query)
		const response = await axios.get(url, { params })
		res.json(response.data)
	} catch (error) {
		res.json(error.message)
	}
})
router.get("/paintings/:id", async function (req, res, next) {
	try {
		let url = `http://www.wikiart.org/en/App/Painting/ImageJson/`
		const response = await axios.get(url + req.params.id)
		res.json(response.data)
	} catch (error) {
		res.json(error.message)
	}
})

router.get("/autocomplete", async (req, res, next) => {
	try {
		const url = "https://maps.googleapis.com/maps/api/place/autocomplete/json"
		const params = new URLSearchParams(req.query)
		const response = await axios.get(url, { params })
		res.json(response.data)
	} catch (error) {
		res.json(error.message)
	}
})
router.get("/details", async (req, res, next) => {
	try {
		const url = "https://maps.googleapis.com/maps/api/place/details/json"
		const params = new URLSearchParams(req.query)
		const response = await axios.get(url, { params })
		res.json(response.data)
	} catch (error) {
		res.json(error.message)
	}
})

router.get("/photos", async (req, res, next) => {
	try {
		const url = "https://maps.googleapis.com/maps/api/place/photo"
		const params = new URLSearchParams(req.query)
		const response = await axios.get(url, { params })
		res.json(response.data)
	} catch (error) {
		res.json(error.message)
	}
})
module.exports = router
