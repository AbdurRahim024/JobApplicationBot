const express = require('express')
const { getBot } = require('../controller/botController')
const router = express.Router()

router.get('/', getBot)

module.exports = router