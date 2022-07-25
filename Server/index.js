const express=require("express");
const app=express();
require('dotenv').config();
const cookieParser=require("cookie-parser");
require("./Connection");
const port=process.env.PORT ||8000;


app.use(express.json());
app.use(require("./Router"));


app.listen(port,()=>{
    console.log(`listening at the port ${port}`);
})