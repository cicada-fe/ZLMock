/**
 * Created by yluo on 16/6/30.
 */


var express = require('express');
var mockService = require('../../utility/mockService');
var router = express.Router();

var responBody = {
    "bizData": {},
    "msg": "请求成功",
    "rtnCode": "0000000",
    "ts": 1465355817586,
    "uri": ""
};

router.use(function (req, res, next) {

    next();
});

router.use(function (req, res, next) {
    responBody.ts = Date.now();
    next();
});

router.post('/insert', function(req, res) {
    console.log(req.body);
});

module.exports = router;
