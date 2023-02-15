const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    productname:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    }

},{
    timestamps:true
})

module.exports=mongoose.model("ebayproduct",productSchema)