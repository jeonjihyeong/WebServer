const express=require('express')
const morgan=require('morgan')
const app=express()
const port=3001;
// const Router = require('router')

app.use(morgan('combined'))

// app.get('*',(req,res)=>{
//     res.status(404);
//     res.set('methodA','ABCDE');
//     res.set({
//         'methodB1':'FGHIJ',
//         'methodB2':'KLMNO'
//     })
//     res.send("내 마음대로 본문을 입력합니다.")
// })

// app.get('/page/:id',(req,res)=>{
//     const id = req.params.id;

//     res.send(`<h1>${id} Page</h1>`);
// })

// app.get('/image',(req,res)=>{
//     fs.readFile('image.png',(error,data)=>{
//         res.type('image/png');
//         res.send(data);
//     })
// })

// app.get('/audio',(req,res)=>{
//     fs.readFile('audio.mp3',(error,data)=>{
//         res.type('audio/mpeg');
//         res.send(data);
//     })
// })

app.get('*',(req,res)=>{
    console.log(req.query);
    res.send(req.query)
})

app.use(express.static('public'));
app.get('*',(req,res)=>{
    res.send('cmd 확인하시오')
});


// app.get('*',(req,res)=>{
//     res.status(404);
//     res.send('해당 경로에는 아무것도 없습니다. ')
// })
// app.get('/',(req,res)=>{
//     res.redirect('http://hanbit.co.kr');
// })
// app.use(Router)
// app.get('/',(req,res)=>{
//     console.log("hello");
//     res.send('hello')
// })

app.listen(port,()=>{
    console.log("serverStart")
});