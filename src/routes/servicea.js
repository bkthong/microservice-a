var express = require('express');
var router = express.Router();

var os = require("os");
var hostname = os.hostname();
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<div style="font-family: Verdana ; font-size: 28">Hello from servicea: ' +  hostname + '</div>');
});

module.exports = router;
