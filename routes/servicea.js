var express = require('express');
var router = express.Router();
const ip = require('ip');
const ipAddress = ip.address() ;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<div style="font-family: Verdana ; font-size: 28">Hello from servicea: ' + ipAddress + '</div>');
});

module.exports = router;
