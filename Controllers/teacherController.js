const teacher = require('../Models/teacherModel')

exports.teacher = async (req,res)=>{
    const {fullname,email,number,password} = req.body
    console.log("Inside register request");
 try{
     // CHECK EMMAIL ALREADY EXISTS
   const existingTeacher = await teacher.findOne({email})
   console.log(existingTeacher);
   if(existingTeacher){
    res.status(406).json("User Already Exists!! Please Login...")
   } else{
    // add user to db
    const newTeacher = teacher({
        fullname,email,number,password
    })
    await newTeacher.save()
    res.status(200).json(newTeacher)
}
 }catch(err){
        res.status(401).json(err)
    }
}

exports.teacherLogin = async (req,res)=>{
    const {fullname,email,number,password} = req.body
    console.log("Inside login request");
 try{
     // CHECK EMMAIL PASSWORD ALREADY EXISTS
   const existingTeacher = await teacher.findOne({email,password})
   console.log(existingTeacher);
   if(existingTeacher){
    //generate token using jwt - 
    // const token = jwt.sign({userId:existingUser._id},process.env.jwt_secret)
    res.status(200).json({existingTeacher/* ,token */ })
   } else{
    res.status(406).json("Invalid Email / Password")
    }
}
 catch(err){
        res.status(401).json(err)
    }
}