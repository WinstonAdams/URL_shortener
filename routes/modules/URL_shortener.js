const express = require('express')
const router = express.Router()

const URL_shortener = require('../../config/mongoose')

router.post('/URL_shortener', (req, res) => {
  //!
  res.send('success')
})

module.exports = router