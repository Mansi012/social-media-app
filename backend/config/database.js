const mongoose=require("mongoose")
mongoose.set('strictQuery', true)
exports.connectDatabase=()=>{
    mongoose.connect(process.env.MONOGO_URL).then(con=>console.log(`Database Connected:${con.connection.host}`))
    .catch((err)=>console.log(err))
}