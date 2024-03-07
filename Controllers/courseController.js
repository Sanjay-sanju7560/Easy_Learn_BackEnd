const course = require('../Models/courseModel')


exports.upload = async (req,res)=>{
    const {name,category,details,len,link} = req.body
    console.log("Inside upload request");
 try{
     // CHECK EMMAIL ALREADY EXISTS
   const existingCourse = await course.findOne({name})
   console.log(existingCourse);
   if(existingCourse){
    res.status(406).json("Course Already Exists!! Please Login...")
   } else{
    // add user to db
    const newCourse = course({
        name,category,details,len,link
    })
    await newCourse.save()
    res.status(200).json(newCourse)
}
 }catch(err){
        res.status(401).json(err)
    }
}



// get homepage projects
exports.getAllCourses = async (req,res)=> {
    try{
        const allcourses = await course.find()
        res.status(200).json(allcourses)
    }catch(err){
        res.status(401).json(err)
    }
}

