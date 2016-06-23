/**
 * Created by yluo on 6/22/16.
 */


var express = require('express');
var URL = require('url');
var mockService = require('../../utility/mockService');
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
 * */
router.use(function (req, res, next) {

    next();
  });


router.use(function (req, res, next) {
    responBody.ts = Date.now();
    next();
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

router.post('/*', function(req, res) {
    var url = URL.parse(req.url);
    var interfaceName = url.path.split('?').shift();
    mockService.queryResponseData(interfaceName,function (result){
        console.log(result.responseData);
        responBody.bizData = result;
        res.send(responBody);
    });
});

module.exports = router;
