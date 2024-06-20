const express = require("express")
const logger = require("morgan")
const cors = require("cors")
const { rateLimit } = require("express-rate-limit")

const limiter = rateLimit({
	windowMs: 1000, // 15 minutes
	limit: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})

// Apply the rate limiting middleware to all requests.

const indexRouter = require("./routes/index")

const app = express()
app.use(limiter)
app.use(cors())
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/", indexRouter)

module.exports = app
