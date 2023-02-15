const express=require("express")
const router=express.Router();
const userSchema=require("../models/userModelSchema")

router.post("/adduser",async(req,res)=>{
    const user=new userSchema({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password

    })
    user.save()
})
router.get(":/",async(req,res)=>{

})
router.delete(":/id",async(req,res)=>{
    
})
router.put(":/id",async(req,res)=>{
    
})
module.exports=router