const express = require('express')
const { getBot, apply } = require('../controller/botController')
const router = express.Router()

router.get('/', getBot)
router.post('/apply', apply)

module.exports = router