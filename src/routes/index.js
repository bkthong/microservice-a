var express = require('express');
const { Server } = require('http');
var router = express.Router();
const ip = require('ip');
const ipAddress = ip.address() ;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'microservice-a (v1.2) : ' + ipAddress });
});

module.exports = router;
