const mongoose=require("mongoose");
const validatornpm=require("validator");
const bcrypt=require("bcrypt");
require('dotenv').config();
const jwt=require("jsonwebtoken");
const userSchema=mongoose.Schema({
    username:{
        type: String,
        trim: true,
    },
    email:{
        type: String,
        trim: true,
        unique:[true, "Email adress is already present"],
        validator: {
            validator:function(val){
            return validatornpm.isEmail(val)
        },
    message:"Please enter valid email"
    }
    },
    password:{
        type: String,
        min: [6,"password should countains atleast 7 characters"],
        trim: true,
        
    },
    cpassword:{
        type: String,
        min: [6,"password should countains atleast 7 characters"],
        trim: true,
    },
    tokens:[
        {
            token:{
                type: String,
                trim: true
            }
        }
    ]
})
userSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,12);
        this.cpassword=await bcrypt.hash(this.cpassword,12);
      
    }
    next();
    })
    userSchema.methods.generateAuthToken=async function(next){
        try{
            const token=jwt.sign({_id:this._id},process.env.SECRET_KEY);
           this.tokens=this.tokens.concat({token:token});
           await this.save();
           return token;
        }
      catch(err){
          console.log(err);
      }
    }
const FUser=new mongoose.model("FUSER",userSchema);

module.exports=FUser;