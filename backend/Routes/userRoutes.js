const express=require("express")
const router=express.Router();
const userSchema=require("../models/userModelSchema")
const{Register, Login}=require("../controllers/userControllers")

router.post("/adduser",Register)
router.post("/login",Login)
module.exports=router