var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'BCD JS Tools' })
})

router.get('/statbank', function (req, res, next) {
  res.render('statbank', { title: 'Statbank Tool' })
})

router.get('/simple', function (req, res, next) {
  res.render('simple', { title: 'Simples' })
})

module.exports = router
