// ROUTER- CONTROLLER - SERVICE

const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors());


app.get('/ping', (req, res)=> {
  res.send('pong')
})

const db = {
  id : 'aaa',
  pw : 'aaa'
} 

app.get('/id/:id',(req,res)=>{
  console.log(req.params)
  res.send(db)
  
})


app.post('/signin', (req, res) => {
  if(req.body.id === db.id){
    if(req.body.pw === db.pw){
      res.send('success');
    }else {
      res.send('failpw');
    }
  }else {
    res.send('failid');
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// authentication authorization

//router : 연결 어느 주소로 갈지 ?
//controller : 전처리   <-> 
// Service : db
//controller : 후처리
