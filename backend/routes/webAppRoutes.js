
const express = require('express')
const { getWebApp } = require('../controller/webAppController')
const router = express.Router()

router.get('/', getWebApp)

module.exports = router