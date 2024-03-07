// Loads .env file contents into process.env by default
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('../easyLearn-backend/Routes/routes.js')
require('./DB/connection')


const elServer = express()
elServer.use(cors())


elServer.use(express.json())
elServer.use(router)
elServer.use('/uploads',express.static('./uploads'))

const PORT = 3000
elServer.listen(PORT,()=>{
    console.log(`Project Fair server started at port :${PORT}`);
})
elServer.get('/',(req,res)=>{
    res.status(200).send("<h1 style=color:red; >Project Fair sever started !! Waiting for client request.. </h1>")
} )
