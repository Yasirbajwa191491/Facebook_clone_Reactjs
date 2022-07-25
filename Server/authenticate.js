const jwt=require("jsonwebtoken");
const FUser=require("./Model");
const authenticate=async(req,res,next)=>{
try{
const token=req.cookies.jwt;
const verify=jwt.verify(token,process.env.SECRET_KEY);
const rootUser=await FUser.findOne({_id:verify._id,"tokens.token":token});
if(!rootUser){
    throw new Error("User not found");
}else{
req.token=token;
req.rootUser=rootUser;
req._id=rootUser._id;

next();}
}catch(error){
    res.status(401).send("Unauthorized: no token proide")
    console.log(error);
}
}
module.exports=authenticate;