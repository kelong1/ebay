const userSchema=require("../models/userModelSchema")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

const Register=async(req,res)=>{
    const {username,email,password}=req.body
    try {
        if(!username||!email||!password){
            res.status(400)
            throw new Error("Please add all fields")
        }
        const userExists=await userSchema.findOne({email})
        if(userExists){
            res.status(400)
            throw new Error("The user already exists")
        }
        const salt= await bcrypt.genSalt(10)
        const hashedpassword= await bcrypt.hash(password,salt)
            const user= await userSchema.create({
                username,
                email,
                password:hashedpassword
        
            })
            user.save()
            if(user){
                res.status(201).json({
                    _id:user.id,
                    username:user.username,
                    email:user.email,
                    token:generateToken(user._id)
                   
                })
            }else{
                res.status(400)
                throw new Error('invalid user data')
            }
        
    } catch (error) {
        console.error(error)
    }
}
const Login=async(req,res)=>{
    const{email,password}=req.body
    try {
        const user =await userSchema.findOne({email})
        if(user &&( await bcrypt.compare(password,user.password))){
            res.json({
                _id:user.id,
                username:user.username,
                email:user.email,
                token:generateToken(user._id)
            })
        }
        else{
            res.status(400)
            throw new Error("Invalid credentials")
        }
    } catch (error) {
        console.error(error)
    }
}
const  generateToken=(_id)=>{
    return jwt.sign({_id},process.env.JWT_SECRET,{
        expiresIn:"30d",
    })
} 

module.exports={
    Register,
    Login
}