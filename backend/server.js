const express=require("express")
const app=express()
const mongoose=require("mongoose")
const dotenv=require("dotenv")

dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS,{useNewUrlParser:true,useUnifiedTopology:true},()=>console.log("database is connected"))

app.listen(process.env.PORT,()=>console.log("port is listening at 7800"))