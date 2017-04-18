var mysql      = require('mysql');
var fs      = require('fs');
var connection = mysql.createConnection({
    host     : process.env.DB_HOST     || 'my-dbname.hostname',
    user     : process.env.DB_USER     || 'username@my-dbname',
    password : process.env.DB_PASSWORD || 'secret',
    database : process.env.DB_DATABASE || ''
});
connection.connect();
connection.query('SELECT sleep(5)', function(err, rows, fields) {
    if (!err)
        console.log('The solution is: ', rows);
    else
        console.log('Error while performing Query., err: '+err);
});

connection.end();
