/**
 * Created by yluo on 6/23/16.
 */

var DBHelper = require('./DBHelper');
let TABLE_NAME_PATH = "path";

class MockService {

    static queryResponseData(path, callback) {

        DBHelper.query(`SELECT responseData From ${TABLE_NAME_PATH} WHERE path = ?`, [path])
            .then((result)=> {
                var responseData = result[0].responseData;
                console.log("mock", responseData);

                if (responseData == null) {
                    responseData = {};
                }
                var jsonObject = JSON.parse(responseData);
                callback(jsonObject);
            }, (err)=> {
                //失败
            });
    }

    static insertMockData(mockData, callback) {
        DBHelper.query(`INSERT INTO ${TABLE_NAME_PATH} ( path, responseData) values ( ?, ?)`, [mockData.path, mockData.responseData])
            .then((result)=> {
                if (err) {
                    console.log('[INSERT ERROR] - ', err.message);
                    return;
                }
                console.log('--------------------------INSERT----------------------------');
                //console.log('INSERT ID:',result.insertId);
                console.log('INSERT ID:', result);
                console.log('-----------------------------------------------------------------');
                callback(result);
            }, (err)=> {
                //失败
            });
    }

}


module.exports = MockService;
