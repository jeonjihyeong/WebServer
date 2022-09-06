const express=require('express')
const app=express()
const port=3000;
const Router = require('router')
app.use(Router)
app.get('/',(req,res)=>{
    console.log("hello");
    res.send('hello')
})

app.listen(port,()=>{
    console.log("serverStart")
});


