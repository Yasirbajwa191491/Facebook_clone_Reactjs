import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import logo from "./noAvatar.png";
import { useState,useEffect } from "react";
 const Topbar=()=> {
const [searchData,setSearchData]=useState("");
const [userData,setUserData]=useState(null);

const getSearchData=async ()=>{
  try{
    const res=await fetch(`/search/${searchData}`,{
      method:"GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
    })
    const data=await res.json();
   setUserData(data);
    // console.log(data[1].username)
    }catch(err){
      console.log(err);
    }
}
useEffect(()=>{
getSearchData();
},[searchData])
// console.log(userData)
  return (
    <>
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Yasir191491</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
            value={searchData}
            onChange={(event)=>setSearchData(event.target.value)}
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link>
          <img
            src={logo}
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
    {/* {
      userData.map((eleE)=>{
        console.log(eleE.username)
        return(
          
          <div className="card" style={{width:"18rem",marginLeft:"300px"}} key={eleE._id}>
       <ul className="list-group list-group-flush">
         <li className="list-group-item">{eleE.username}</li>
       </ul>
      </div>
        )
      })
    } */}
    
    </>
  );
}

export default Topbar