require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const data = {'name':'John', 'age':23, 'location':'delhi'}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req,res) => {
  res.send('<h3>user login</h3>')
})

app.get('/user', (req,res) => {
  res.send('<h1>user profile</h1>')
})

app.get('/john', (req,res) => {
  res.json(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})