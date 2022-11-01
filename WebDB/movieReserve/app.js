const socketIo = require('socket.io')
const express = require('express');
const http = require('http');
const fs = require('fs');

const seats = [
    [1,1,0,1,1,0,0,0,0,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
]

const app = express();
const server = http.createServer(app);

app.get('/',(req,res,next)=>{
    fs.readFile('HTMLPAGE.html',(err,data)=>{
        res.send(data.toString());
    })
})

app.get('/seats',(req,res,next)=>{
    res.send(seats);
});

server.listen(52273,()=>{
    console.log('Server Running at http://127.0.0.1:52273');
});

const io = socketIo(server);

io.sockets.on('connection',(socket)=>{
    socket.on('reserve',(data)=>{
        console.log("socket on!")
        seats[data.y][data.x]= 2;
        io.sockets.emit('reserve',data);
    })
    socket.on('cancle',(data)=>{
        console.log("socket on!")
        seats[data.y][data.x]=1;
        io.sockets.emit('cancle',data)
    })
})