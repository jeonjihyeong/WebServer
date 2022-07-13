const express = require('express')
const methodOverride = require('method-override');
const app = express()
const port = 3000
const cors = require('cors');
const bodyParser = require('body-parser')
const db= require('./lib/db')
const router = require('./router')

app.use(methodOverride('_method'));
app.use(bodyParser.json())
app.use(cors());
app.use(router.basicRouter);

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)
  await db.initialize()
})