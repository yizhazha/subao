var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/xihu', function(req, res, next) {
    res.render('xihu.html');
});

router.get('/mianmo', function(req, res, next) {
    res.render('mianmo.html');
});

router.get('/erji', function(req, res, next) {
    res.render('erji.html');
});


/* GET category page. */
router.get('/', function(req, res, next) {
    res.render('meizhuang.html');
});




/* Get detail item info */
router.get('/item1', function(req, res, next) {
    res.render('item1.html');
});

router.get('/item2', function(req, res, next) {
    res.render('item2.html');
});

router.get('/item3', function(req, res, next) {
    res.render('item3.html');
});

router.get('/item4', function(req, res, next) {
    res.render('item4.html');
});

router.get('/item5', function(req, res, next) {
    res.render('item5.html');
});

router.get('/item6', function(req, res, next) {
    res.render('item6.html');
});

router.get('/item7', function(req, res, next) {
    res.render('item7.html');
});

router.get('/item8', function(req, res, next) {
    res.render('item8.html');
});

router.get('/item9', function(req, res, next) {
    res.render('item9.html');
});

router.get('/item10', function(req, res, next) {
    res.render('item10.html');
});


module.exports = router;