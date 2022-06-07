const express = require('express')
const app = express()
const path = require('path')
const dotenv = require('dotenv').config()
const color = require('colors')
const serverName = process.env.SERVER_NAME
const port = process.env.SERVER_PORT || 7070

const connectDb = require(path.join(__dirname, './config/db'))

connectDb()

// for getting post request
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//use route
app.use('/api/products', require(path.join(__dirname, './routes/products')))

//server listening
app.listen(port, error => error ? console.log(`error`.red) : console.log(`${serverName} Server Is Running On ${port} Port`.blue))