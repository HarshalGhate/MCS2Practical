var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "root",
database: "Node"  
});  
con.connect(function(err) {  
if (err) throw err;  
console.log("Connected!");  
con.query("CREATE DATABASE Noded", function (err, result) {  
if (err) throw err;  
console.log("Database created");  
});  
});  

var sql = "CREATE TABLE customers (name VARCHAR(25), address VARCHAR(25))";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table created");
});