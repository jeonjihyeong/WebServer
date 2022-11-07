const fs = require('fs');
const ejs = require('ejs');
const http = require('http');
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken')

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
    new Product('jQuery','물.jpg',28000,30),
    new Product('Node.js','물.jpg',32000,30),
    new Product('Socket.io','물.jpg',17000,30),
    new Product('Connect','물.jpg',18000,30),
    new Product('Express','물.jpg',31000,30),
    new Product('EJS','물.jpg',12000,30),
];

const app = express();
const server = http.createServer(app);

app.use(cors);
app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    const LoginPage = fs.readFileSync('LoginPage.html','utf8');
    res.send(ejs.render(LoginPage,{
        products:products
    }));
})

const tempDB = {
    id:'test',
    pw:'test'
}

const signToken =(payload)=>{
    try{
        const result = jwt.sign(payload,'aaa',{
            algorithm:'HS256',
            expirseIn:'5h',
        })
        return result
    }catch(err){
        console.log(err)
    }
    return result
}

app.post('/login',async(req,res)=>{
    console.log('hi')
    if(req.body.id===tempDB.id){
        if(req.body.pw===tempDB.pw){
            const token = signToken(tempDB)
            res.send({data:token})
        }
        else{
            res.send({message:"pwFailed"})
        }
    }else{
        res.send({message:"idFailed"})
    }
})

app.get('/shop',(req,res)=>{
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