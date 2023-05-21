const express = require('express')
const router = express.Router()

const URL_shortener = require('../../models/URL_shortener')
const generateShortURL = require('../../generate_shortURL')

router.post('/', (req, res) => {
  const URL = req.body.URL
  const shortURL = generateShortURL()

  URL_shortener.findOne(req.body)
    .lean()
    .then(URLItem => {
      // 若 .findOne(req.body) 沒有找到，URLItem 為 null
      if (URLItem) {
        res.render('index', { shortURL: URLItem.shortURL, URL })
      } else {
        URL_shortener.create({ URL, shortURL })
          .then(() => res.render('index', { shortURL, URL }))
          .catch(err => console.log(err))
      }
    })
    .catch(err => console.log(err))
})

router.get('/:garbled', (req, res) => {
  const garbled = req.params.garbled
  // 在所有的 URLItem 中，找到 shortURL 有包含特定字串的 URLItem
  URL_shortener.findOne({ shortURL: { $regex: garbled } })
    .lean()
    .then(URLItem => res.redirect(URLItem.URL))
    .catch(err => console.log(err))
})

module.exports = router