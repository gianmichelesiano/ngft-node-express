var express = require('express');
var app = express();
const config = require('./config');

app.get('/', function (req, res) {
   
    var sql = require("mysql");

    var connection = sql.createConnection(config.db);

    console.log(req.query.firstname)

    connection.connect(config, function (err) {
    
        if (err) console.log(err);


        connection.query('select * from users where firstname=?',  req.query.firstname , function (err, recordset) {    
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });


});

var server = app.listen(config.port, function () {
    console.log('Server is running.. on '+ config.port);
});
