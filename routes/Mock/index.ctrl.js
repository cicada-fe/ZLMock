/**
 * Created by yluo on 6/22/16.
 */


var express = require('express');
var router = express.Router();

var responBody = {
    "bizData": {},
    "msg": "请求成功",
    "rtnCode": "0000000",
    "ts": 1465355817586,
    "uri": ""
};

/**
 * how to get the params from req
 *
 demo.use(function (req, res, next) {
    console.log('Time:', Date.now());
    console.log('Req.params:', req.params);
    console.log('Req.body:', req.body);
    console.log('Req.query:', req.query);
    next();
  });
 */

router.use(function (req, res, next) {
    responBody.ts = Date.now();
    next();
});

router.post('/', function(req, res) {
    responBody.bizData = {'111':'1111'};
    res.send(responBody);
});

router.post('/queryUser', function(req, res) {
    var user = {'userName':'Mars'};
    user.userGender = '男';
    var userList =
        [{'userName':'Mars',"userGender":"男"},
            {'userName':'Mars1',"userGender":"男1"},
            {'userName':'Mars1',"userGender":"男2"}];
    responBody.bizData = userList;
    res.send(responBody);
});

router.post('/queryList', function(req, res) {
    var user = {'userName':'Mars'};
    user.userGender = '男';
    var userList =
        [{'userName':'Eric',"userGender":"男"}];
    responBody.bizData = userList;
    res.send(responBody);
});

module.exports = router;
