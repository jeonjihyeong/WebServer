const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const bodyParser = require('body-parser')
const {db}= require('./src/lib/index')
const router = require('./src/router')

app.use(bodyParser.json())
app.use(cors());
app.use(router.basicRouter);

// app.post('/login',async(req,res)=>{
//     const {id,pw}=req.body;
    
//     let result;
//     try{
//         result = await models['user'].findOne({
//             where:{
//                 id : id
//             }
//         })
//     }catch(err){
//         console.log(err)
//     }

//     console.log(result)
// })

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)
  await db.initialize()
})