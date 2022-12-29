const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(cors());

const userData={
    id:'hi',
    pw:'gg'
}
app.post('/',function(req,res){
    console.log(req);
    res.send('pong')
})
app.post('/login',function(req,res){
    console.log(req)
    res.send('pong')
})
app.get('/ping', function (req, res) {
  res.send('pong')
})
app.get('/ping/pong', function (req, res) {
  res.send('pang')
})

app.listen(port, async () => {
    console.log(`Example app listening on port ${port}`)
  })