
const express = require('express')
const { getScraper } = require('../controller/scraperController')
const router = express.Router()

router.get('/', getScraper)

module.exports = router