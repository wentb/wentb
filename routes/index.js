var express = require('express');
var router = express.Router();
var user = require('../model/user');

/* 首页 */
router.get('/', function(req, res, next) {
  res.render('index', { title: '淘文宝' });
});

//登录
router.get('/login', function(req, res, next) {
  res.render('login', { title: '淘文宝' });
});

//注册页
router.get('/reg', function(req, res, next) {
  res.render('reg', { title: '淘文宝' });
});

//注冊新用戶功能
router.post('/adduser', function(req, res, next){
  let params = req.body;
  let userName = params.userName;
  let password = params.password;
  user.create({
    loginid:userName,
    password:password,
    createAt:new Date()
  });
});

router.get('/category', function(req, res, next) {
  res.render('category', { title: '淘文宝' });
});

//支付页 TODO

module.exports = router;
