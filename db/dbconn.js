/**
 * Created by yluo on 6/22/16.
 */

var mysql  = require( "mysql");


const DB_CONFIG = {
    host     : '172.16.160.61',
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
}


module.export =  DBConnection.getInstance();

