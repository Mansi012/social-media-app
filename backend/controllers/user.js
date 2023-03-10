const User=require("../models/user")
exports.createUser=async(req,res)=>{
    try{
const{name,email,password}=req.body
let user=await User.findOne({email});
if(user){
    return res.status(400).json({success:false,message:"user already exists"})
}
user =await User.create({name,email,password,avatar:{public_id:"sample_id",url:"sampleurl"}})
res.status(201).json({success:true,data:user})
    }catch(error){
        res.status(500).json({success:false,message:error})
    }
}