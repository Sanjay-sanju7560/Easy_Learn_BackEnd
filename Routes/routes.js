const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')
const teacherController = require('../Controllers/teacherController')
const courseController = require('../Controllers/courseController')
const multerConfig = require('../Middlewares/multerMiddleware')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')


// route for Register
router.post('/register',userController.register)
//Login
router.post('/login',userController.login)
// route for Teacher Register
router.post('/teacher',teacherController.teacher)
//teacher Login
router.post('/teacherLogin',teacherController.teacherLogin)
// add course 
router.post('/upload',courseController.upload)
//get course 
router.get('/all-courses',courseController.getAllCourses)

module.exports = router 