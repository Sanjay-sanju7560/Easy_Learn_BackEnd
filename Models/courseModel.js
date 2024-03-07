const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    name:{
        type:String
    },
    category:{
        type:String
    },
    details:{
        type:String
    }, 
    len:{
        type:String
    },
    link:{
        type:String
    }
})
const courseModel = mongoose.model('course',courseSchema)

module.exports = courseModel