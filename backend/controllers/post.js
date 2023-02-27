exports.createPost=async(req,res)=>{
    try{
const newPostData={
    caption:req.body.caption,
    image:{
        public_id:"req.body.public_id",
        url:"req.body.url"
    },
    owner:req.user._id
}
const newPost=await post.create(newPostData)

res.status(201).json({scucess:true,message:newPost})

    }catch(error){
        res.status(500).json({sucess:false,message:error})
    }

}