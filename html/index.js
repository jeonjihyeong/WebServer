const express = require('express')
const app = express()
const sequelize = require('sequelize')

const info = {
  "first":{
      "id": "aaaa",
      "pw":"aaaa"},
  "second":{
      "id":"bbbb",
      "pw":"bbbb"}
}
app.get('/', function (req, res) {
  res.send("")
})

app.listen(3000)