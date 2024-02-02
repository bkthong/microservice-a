var express = require('express');
var router = express.Router();

//const ip = require('ip');
//const ipAddress = ip.address() ;

var os = require("os");
var hostname = os.hostname();
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('TEST2 Hello from servicea (v1.4) : ' +  hostname + '\n');
});

module.exports = router;
