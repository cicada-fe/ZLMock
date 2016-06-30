/**
 * Created by yluo on 6/22/16.
 */

var mysql  = require( "mysql");


const DB_CONFIG = {
    host     : 'localhost',
    user     : 'root',
    password : '111111',
    database : 'mock'
};


let connection = null;


class DBConnection {
     constructor(){
         //创建连接
         this.client = mysql.createConnection(DB_CONFIG);
         this.client.connect();
     }

    static getInstance(){
        if(!connection){
            connection = new DBConnection();
        }
        return connection;
    }

    static query(sql, paramList, callback) {
        DBConnection.getInstance().client.query(sql,paramList,(err, results, fields)=> {
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


module.export =  DBConnection.getInstance();

