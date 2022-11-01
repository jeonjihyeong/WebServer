const fs = require('fs');
const ejs = require('ejs');
const http = require('http');
const express = require('express');

let counter = 0;
function Product(name,image,price,count){
    this.index = counter++;
    this.name = name;
    this.image=image;
    this.price=price;
    this.count = count;
}

const products = [
    new Product('JavaScript','물.jpg',28000,20),
    new Product('TavaScript','물.jpg',28000,30),
    new Product('TavaScript','물.jpg',28000,30),
    new Product('TavaScript','물.jpg',28000,30),
    new Product('TavaScript','물.jpg',28000,30),
    new Product('TavaScript','물.jpg',28000,30),
    new Product('TavaScript','물.jpg',28000,30),
];

const app = express();
const server = http.createServer(app);

app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    const htmlPage = fs.readFileSync('HTMLPage.html','utf8');

    res.send(ejs.render(htmlPage,{
        products:products
    }));
})

server.listen(52273,()=>{
    console.log("Server Runnig at http://127.0.0.1:52273");
});

const io = require('socket.io')(server);
io.on('connection',(socket)=>{
    const onReturn=(index)=>{
        products[index].count++;
        clearTimeout(cart[index].timerID);
        delete cart[index];
        io.sockets.emit('count',{
            index:index,
            count:products[index].count
        }) 
    }
    const cart ={}

    socket.on('cart',(index)=>{
        products[index].count--;

        cart[index]={};
        cart[index].index = index;
        cart[index.timerID] = setTimeout(()=>{
            onReturn(index);
        },1000*60*10);
        io.sockets.emit('count,',{
            index:index,
            count:products[index].count
        });
    })
    socket.on('buy',(index)=>{
        clearTimeout(cart[index].timerID);
        delete cart[index];
        io.sockets.emit('count',{
            index:index,
            count: products[index].count
        });
    })
    socket.on('return',(index)=>{
        onReturn(index);
    })
})