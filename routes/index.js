var express = require('express');
var router = express.Router();

/* 首页 */
router.get('/', function(req, res, next) {
  res.render('index', { title: '淘文宝' });
});

//登录
router.get('/login', function(req, res, next) {
  res.render('login', { title: '淘文宝' });
});


//订单页

//注册页 TODO

//支付页 TODO

module.exports = router;
