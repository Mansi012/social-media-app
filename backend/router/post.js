const express=require("express")
const { createPost } = require("../controllers/post")
const router=express.Router()
router.route("/post/upload").post(createPost)
//localhost:4000/api/v1/post/upload
module.exports=router