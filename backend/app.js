const express=require("express")
const app=express()
require("dotenv").config({path:"backend/config/config.env"})
//using middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//importing routes
const post=require("./router/post")
const user=require("./router/user")
//using routes
app.use("/app/v1", post)
app.use("/app/v1", user)
module.exports=app