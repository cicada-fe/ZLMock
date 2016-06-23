var DBcon = require("../db/DBconn");

/***
 * 数据库操作管理类
 */
class DBHelper {

    /**
     * 查询sql
     * @param sql
     * @param paramList
     * @param callback
     */
    static query(sql, paramList, callback) {
        console.log(`sql=${sql} paramList=${paramList}`);
        DBcon.query(sql,paramList,(err, results, fields)=> {
                return new Promise(function (resolve, reject) {
                    if (err) {
                        resolve(results);
                    } else {
                        reject(err);
                    }
                });
            }
        )
    }
}