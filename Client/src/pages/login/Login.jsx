import React,{useState} from "react";
import "./login.css";
import { useHistory } from "react-router";

 const Login=()=> {
const [getData,setGetData]=useState({
  email:"",
  password:""
})
const history=useHistory();
const fun=(event)=>{
const {name,value}=event.target;
setGetData({...getData,[name]:value})
}
  const cfun=async(event)=>{
    event.preventDefault();
    try{
const {email,password}=getData;
const res=await fetch("/signin",{
  method:"POST",
  headers:{
   "Content-Type":"application/json"
  },
  body: JSON.stringify({email,password})
})
const data=await res.json();
if(res.status===401 || !data){
  alert("Invalid credentials");
}else{
  alert("Login successfull");
  history.push("/");
}
    }catch(err){
      console.log(err);
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
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              name="email"
             onChange={fun}
              value={getData.email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              name="password"
             onChange={fun}
              value={getData.password}
           
            />
            <button className="loginButton" type="submit" onClick={cfun} >
              Login In
            </button>
            <a onClick={()=>history.push("/verify")} className="loginForgot">Forgot Password?</a>
            <button className="loginRegisterButton" onClick={()=>history.push("/signup")} >
        Create New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;