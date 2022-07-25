import React,{useState} from "react";
import "./register.css";
import { useHistory } from "react-router";

 const Register=()=> {
const [data,setData]=useState({
  username:"",
  email:"",
  password:"",
  cpassword:""
})
  const history = useHistory();
const fun=(event)=>{
  const {name,value}=event.target;
  setData({...data,[name]:value})
}
const cfun=async(event)=>{
  event.preventDefault();
try{
const {username,email,password,cpassword}=data;
const res=await fetch("/registration",{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body: JSON.stringify({username,email,password,cpassword})
})
const register=await res.json();
if(res.status===422 || !register){
  alert("Registration Failed")
}else{
  alert("Registration Successfull");
  history.push("/login");
}
}catch(error){
  console.log(error);
}
}
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Facebook</h3>
          <span className="loginDesc">
             Facebook helps you connect and share with the people in your life.
          </span>
        </div>
        <div className="loginRight">
          <form method="POST" className="loginBox" >
            <input
              placeholder="Username"
              required
              className="loginInput"
              onChange={fun}
              value={data.username}
              name="username"
            />
            <input
              placeholder="Email"
              required
              className="loginInput"
              onChange={fun}
              value={data.email}
              type="email"
              name="email"
            />
            <input
              placeholder="Password"
              required
              className="loginInput"
              value={data.password}
              type="password"
              onChange={fun}
              minLength="6"
              name="password"
            />
            <input
              placeholder="Password Again"
              required
              className="loginInput"
              value={data.cpassword}
              onChange={fun}
              type="password"
              name="cpassword"
            />
            <button className="loginButton" type="submit" onClick={cfun}>
              Sign Up
            </button>
            <button className="loginRegisterButton" onClick={()=>history.push("/login")}>Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;