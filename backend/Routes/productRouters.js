const express=require("express")
const router=express.Router();
const product_schema=require("../models/productModelSchema")

router.post("/addproduct",async(req,res)=>{
    const product =new product_schema({
        productname:req.body.productname,
        description:req.body.description,
        price:req.body.price,
        image:req.body.image
    })
    product.save()

})
router.get(":/",async(req,res)=>{

})
router.delete(":/id",async(req,res)=>{
    
})
router.put(":/id",async(req,res)=>{
    
})
module.exports=router