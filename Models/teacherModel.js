const mongoose = require('mongoose')
const tchrSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:String
    },
    password:{
        type:String,    
        required:true
    }
})

const tchrModel = mongoose.model('teacher',tchrSchema)

module.exports = tchrModel