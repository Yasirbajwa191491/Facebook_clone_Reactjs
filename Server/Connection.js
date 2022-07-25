const mongoose=require("mongoose");
const dotenv=require("dotenv");


const DB=process.env.DATABASE;

mongoose.connect("mongodb://localhost:27017/yasirdatabase",{   //connect with compass
    // useCreateIndex:true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
}).then(()=>{
    console.log("connection successfull");
}).catch((err)=>{
    console.log(err);
})
// mongoose.connect(DB,{
//     // useCreateIndex:true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // useFindAndModify: false
// }).then(()=>{
//     console.log("connection successfull");
// }).catch((err)=>{
//     console.log(err);
// })