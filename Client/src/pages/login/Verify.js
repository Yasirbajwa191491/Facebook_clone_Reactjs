import React,{useState} from 'react'
import { useHistory } from "react-router";
import "./login.css";
const Verify = () => {
    const [email,setEmail]=useState("")
const history=useHistory();

const fun=async ()=>{
    const res=await fetch("/verifyEmail",{
        method:"POST",
        headers:{
         "Content-Type":"application/json"
        },
        body:JSON.stringify({email})
    })
}
  return (
    <>
     <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Facebook</h3>
          <span className="loginDesc">
            Facebook helps you connect and share with the people in your life.
          </span>
          <br />
          <button className="loginButton" onClick={()=>history.push("/login")}>Login</button>
        </div>
        <div className="loginRight">
          <form method="POST" className="verifyBox" >
          <input
              placeholder="Enter email to verify"
              type="email"
              required
              minLength="6"
              className="loginInput"
              value={email}
            onChange={(event)=>setEmail(event.target.value)}
            />
             <button onClick={fun} className="loginButton" type="submit"  >
              Verify
            </button>
          </form>
        </div>
      </div>
    </div>   
    </>
  )
}

export default Verify