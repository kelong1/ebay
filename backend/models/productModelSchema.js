const mongoose=require("mongoose")
const Schema=mongoose.Schema()
const productSchema=new Schema({
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
    Image:{
        type:String,
        required:true
    }

},{
    timestamps:true
})

module.exports=mongoose.model("ebayproduct",productSchema)