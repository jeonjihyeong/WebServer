var fs = require('fs')
var http= require('http')
var express = require('express')

var client = require('mysql2').createConnection({
    user:'root',
    password:'cjswp7014@@',
    database:'location',
    
});
var app= express();
var server = http.createServer(app);

app.get('/tracker',function(req,res){
    fs.readFile('Tracker.html',function(err,data){
        res.send(data.toString());
    })
})

app.get('/observer',function(req,res){
    fs.readFile('Observer.html',function(err,data){
        res.send(data.toString());
    })
})

app.get('/showdata',function(req,res){
    client.query('SELECT * FROM locations WHERE name=?',[req.params.name],
        function (err,data){
            res.send(data);
        });
})

server.listen(52273,function(){
    console.log('Server Running at http://127.0.0.1:52273');
});

var io =require('socket.io')(server);
io.on('connection',(socket)=>{
    socket.on('join',function(data){
        socket.join(data);
    });

    socket.on('location',function(data){
        client.query('INSERT INTO locations(name, latitude, longitude, date)VALUES(?,?,?,NOW())',[data.name,data.latitude,data.longitude]); 
        io.sockets.in(data.name).emit('receive',{
            latitude:data.latitude,
            longitude:data.longitude,
            date:Date.now()
        })
    })
})

