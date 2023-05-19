const express = require('express')
const router = express.Router()

const URL_shortener = require('../../config/mongoose')
const generateShortURL = require('../../generate_shortURL')

router.post('/URL_shortener', (req, res) => {
  //!
  const shortURL = generateShortURL()
  res.render('index', { shortURL })
})

module.exports = router