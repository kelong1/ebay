const express=require("express")
const app=express()
const cors=require("cors")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const userRoutes=require("./Routes/userRoutes")
const productRoutes=require("./Routes/productRouters")

dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS,{useNewUrlParser:true,useUnifiedTopology:true},()=>console.log("database is connected"))

app.use(express.json())
app.use(cors())
app.use("/app/users",userRoutes)
app.use("/app/products",productRoutes)
app.listen(process.env.PORT,()=>console.log("port is listening at 7800"))