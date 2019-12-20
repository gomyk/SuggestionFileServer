var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/index', function(req, res, next) {
  res.render('index.html');
});

router.get('/index2', function(req, res, next) {
  res.render('index2.html');
});

router.get('/index3', function(req, res, next) {
  res.render('index3.html');
});

router.get('/index3-horizontal', function(req, res, next) {
  res.render('index3-horizontalmenu.html');
});

router.get('/barchart', function(req, res, next) {
  res.render('barchart.html');
});

router.get('/linechart', function(req, res, next) {
  res.render('linechart.html');
});

router.get('/piechart', function(req, res, next) {
  res.render('piechart.html');
});
module.exports = router;
