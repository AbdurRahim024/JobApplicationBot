const express = require('express')
const { getDummy } = require('../controller/dummyController')
const router = express.Router()

router.get('/', getDummy)

module.exports = router