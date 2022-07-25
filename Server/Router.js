const express=require("express");
const router=express.Router();
const bcrypt=require("bcrypt");
const cookieParser=require("cookie-parser");
require("./Connection");
const authenticate=require("./authenticate");
const FUser=require("./Model");



router.use(cookieParser());
router.get("/home",authenticate,(req,res)=>{
    res.send(req.rootUser);
})
router.get("/search/:name",async(req,res)=>{
    try {
        const name=req.params.name;
        const data=await FUser.find({name:name})
    res.send(data);
    } catch (error) {
      res.status(400).send(error)  
    }
})
router.post("/registration",async(req,res)=>{
    try{
        console.log(req.body);
        const {username,email,password,cpassword}=req.body;
        if(!username || !email || !password || !cpassword){
        return res.status(422).json({error:"Please filled all fields properly"});
        }
        const User=await FUser.findOne({email:email});
        if(User){
            res.status(422).json({error:"Email already exist"});
        }else if(password !==cpassword){
            res.status(422).json({error:"Password is not matching"})
        }
            const data=new FUser({username,email,password,cpassword});
            await data.save();
            res.status(201).json({message:"User registered successfully"});
    }catch(err){
        res.status(500).send({error:"User Error"})
    }
    
    
})
router.post("/signin",async(req,res)=>{
    try{
console.log(req.body);
const {email,password}=req.body;
if(!email || !password){
    return res.status(401).json({error:"Please filled all fields properly"});
}
const user=await FUser.findOne({email:email});
if(!user){
    res.status(401).json({error:"Invalid credentials"});
}else{
    const verify=await bcrypt.compare(password,user.password);
    const token=await user.generateAuthToken();
    console.log(token);
    await user.save();
    res.cookie("jwt",token,{
        expires: new Date(Date.now()+3000000),
        httpOnly: true
    })
    if(verify){
        res.status(201).json({message:"Login Successfully"})
    }else{
        res.status(401).json({error:"Invalid credentials"});
    }

}
    }catch(error){
        res.status(500).send({error:"User Error"}) 
    }
})
module.exports=router