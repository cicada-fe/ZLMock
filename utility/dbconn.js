/**
 * Created by yluo on 6/22/16.
 */
function createDbConn (){

    var mysql = require('mysql');

    //创建连接
    var client = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '111111',
        database : 'mock'
    });

    client.connect();
    return client;
}

dbconn = createDbConn();

var CreateDbConn  = {

}

CreateDbConn.queryData =
    function (sql, paraList, callback){
        console.log("sql:"+sql, "paraList:"+paraList);
        dbconn.query(
            sql,paraList,
            function selectCb(err, results, fields) {
                if (err) {
                    throw err;
                }
                console.log(results);
                if(results)
                {
                    callback(results);
                }
            }
        );
    }

module.exports = CreateDbConn;
