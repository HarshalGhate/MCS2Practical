var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: "root",
  password: "root",
  database:'employee'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query('SELECT * FROM emp', (err,rows) => {
    if(err) throw err;
  
    console.log('Data received from Db:');
    console.log(rows);
  });