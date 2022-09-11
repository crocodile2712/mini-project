import React, { useEffect } from "react";
import "./topbar.css";
// import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { actionLogout } from "../../redux/userRedux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Topbar() {
  const user = useSelector(state => state.user.currentUser)
  const dispatch = useDispatch();
  const history = useHistory();
  const logout = () =>{
    dispatch(actionLogout())

  }
  useEffect(()=>{
    !user.isAdmin && history.push("/login") 
  },[history,user])
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">lamaadmin</span>
        </div>
        <div className="topRight">
          <img src={user?.img
                  ? user.img
                  : "https://mcdn.coolmate.me/image/April2022/meme-cho-shiba-15.jpg"} alt="" className="topAvatar" />
          <div className="topbar-username">{user.username}</div>
          <div className="topbar-logout" onClick={logout}> Log Out</div>
        </div>
      </div>
    </div>
  );
}
