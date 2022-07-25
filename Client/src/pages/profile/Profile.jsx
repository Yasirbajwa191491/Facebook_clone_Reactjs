import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Profile() {

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={"images/noCover.png"
                }
                alt=""
              />
              <img
                className="profileUserImg"
                src={"images/noAvatar.png"
                }
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Yasir191491</h4>
              <span className="profileInfoDesc">MERN Stack Developer</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="yasir191491" />
            <Rightbar user="yasir191491" />
          </div>
        </div>
      </div>
    </>
  );
}
