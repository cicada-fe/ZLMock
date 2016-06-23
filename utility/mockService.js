/**
 * Created by yluo on 6/23/16.
 */

var DBHelper = require('./DBHelper');
let TABLE_NAME_PATH = "path";

class MockService {

    static queryResponseData (path,callback){

        DBHelper.query(`SELECT responseData From ${TABLE_NAME_PATH} WHERE path = ?`,[path])
            .then((result)=>{
                var responseData = result[0].responseData;
                console.log("mock",responseData);

                if(responseData==null){
                    responseData = {};
                }
                var jsonObject = JSON.parse(responseData);
                callback(jsonObject);
            },(err)=>{
                //失败
            });
    }

}



module.exports = MockService;
