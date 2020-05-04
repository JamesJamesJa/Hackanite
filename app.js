var express = require('express');

var cors = require('cors');
var app = express();
var mysql = require('mysql');
app.use(cors());
var connection = mysql.createConnection({
    host: 'hackanite5.ilab.sit.kmutt.ac.th',
    user: 'user',
    password: 'password1',
    database: 'cheetangchuay',
});



app.post('/register', function (req, res) {
    connection.connect(function (kk) {
        let sql = `INSERT INTO cheetangchuay.account (firstname,lastname,email,phoneNumber) values('${req.query.firstname}','${req.query.lastname}','${req.query.email}','${req.query.phoneNumber}')`;
        connection.query(sql, (err, resp) => {
            if (err) throw err;
            console.log('success');
            res.send("Success");
            // res.sendStatus();
            // connection.end();    
        });
    });

});
app.get("/", (req, res) => {
    res.status(200).send("หน้าแรกของ api express");
});

// app.get('/number', (req, res) => {
//     // res.status(200).json(req.body);
//     connection.connect(function (kk) {
//         let sql = 'select count(id) as number from wordpress.user';
//         connection.query(sql, (err, resp) => {
//             if (err) throw err;
//             console.log('success');
//             console.log(resp);
//             res.send(resp);
//             // connection.end();    
//         });
//     });
    
// });



app.listen('5000', () => {
    console.log('start port 3000');
});
