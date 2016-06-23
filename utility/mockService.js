/**
 * Created by yluo on 6/23/16.
 */

var TABLE_NAME_PATH = "path";

var dbConn = require('./dbconn');

var MockService  = {

}

MockService.queryResponseData =
    function (path,callback){
        dbConn.queryData('SELECT responseData From '+ TABLE_NAME_PATH + " WHERE path = ?",[path],function(result){
            var responseData = result[0].responseData;
            console.log("mock",responseData);

            if(responseData==null){
                responseData = {};
            }
            var jsonObject = JSON.parse(responseData);
            callback(jsonObject);
        })
    }


module.exports = MockService;
