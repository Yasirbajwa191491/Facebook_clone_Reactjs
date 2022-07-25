import React,{useEffect,useState} from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"
import { useHistory } from "react-router-dom";
const Home=()=>{
const history=useHistory();
  const getHomeData=async()=>{
    try{
    const res=await fetch("/home",{
      method:"GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
    })
    const data=await res.json();
    console.log(data);
    }catch(err){
      console.log(err);
      history.push("/login")
    }
  }
  
useEffect(()=>{
getHomeData();
},[])
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed/>
        <Rightbar/>
      </div>
    </>
  );
}
export default Home;