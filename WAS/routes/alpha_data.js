var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var redis = require('redis');
var JSON = require('JSON');

var log4js = require('log4js');
log4js.configure('./configure/log4js.json');
var operation_log = log4js.getLogger("operation");
var error_log = log4js.getLogger("error");
var interim_log = log4js.getLogger("interim");

var dbPool = require('../src/db.js');
var redisPool = require('../src/caching.js');
var redirect = require('../src/redirector_send.js');
var memoryManager = require('../src/memoryManager.js');
var util = require('../src/util.js');
var config = require('../src/configs.js');
var monitoring = require('../src/monitoring.js');
var coord = require('../src/coord.js');
var job = require('../src/periodicTask.js')

var app = express();

//---------------------------------------------------------------------------//

router.get('/index', function(req, res, next) {
  res.render('alphadata_index');
  //template 이라는 URI로 왔을때, temp라고하는 템플릿 파일을 이용해서 렌더링 한다는 의미.
    //res.render('temp', {time: 'hello', _title: 'Alphahacker'});
    //res.render('temp', {time: Date()});
    //res.render('temp', {time: 'hello'});
});

module.exports = router;
