const express = require('express')
const bodyParser=require('body-parser')
const mongoose = require('mongoose')
const cors=require('cors')
const url = 'mongodb://localhost/CBIT'
const app = express()
const studentsrouter = require('./routes/students')
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection
con.on('open', () =>
{
console.log('connected...')
})
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use('/students',studentsrouter)
app.listen(5000, () =>
{
console.log('Server started')
})
