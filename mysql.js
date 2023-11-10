var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'sunrin'
});

connection.connect();

connection.query('SELECT * from teacher', function (error, results, fields) {
  if (error) throw error;
  console.log( results);
});

connection.end();