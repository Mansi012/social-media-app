const mongoose=require("mongoose")
const UserSchema=new mongoose.Schema({
name:{
    type:String,
    require:[true,"please enter a name"],
},
avatar:{
public_Id:String,
url:String,
},
email:{
    type:String,
    require:[true,"please enter an email"],
    unique:[true,"email already exists"],
},
password:{
type:String,
required:[true,"please enter a password" ],
minlength:[6,"password must be at least 6 character"],
select:false,
},
posts:
[
    {
        type:mongoose.Schema.Types.ObjectId,
            ref:"posts"  
    }
],
followers:
[
    {
        type:mongoose.Schema.Types.ObjectId,
            ref:"posts"  
    }
],
following:
[
    {
        type:mongoose.Schema.Types.ObjectId,
            ref:"posts"  
    }
]
})
module.exports=mongoose.model("user",UserSchema)