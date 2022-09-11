import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  Publish,
} from "@material-ui/icons";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import "./user.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { updateUserInfo } from "../../redux/apiCalls";

export default function User() {
  const location = useLocation();
  const dispatch = useDispatch();
  const allUser = useSelector((state) => state.allUsers.users);
  const err = useSelector((state) => state.allUsers.message);

  const userId = location.pathname.split("/")[2];
  const [updateInfo,setUpdateInfo] = useState([])
  const [file,setFile] =useState(null)
  const user = useMemo(()=>
    allUser.find(ele =>ele._id === userId)
  ,[allUser])

  const handleUpdate =(e) =>{
    const {name, value}= e.target
    setUpdateInfo((ref)=> {
      return {
        ...ref,...user,[name]:value
      }
    })
  }
  const updateUser =(e)=>{
    e.preventDefault();
    if (file) {
      const fileName = new Date().getTime() + file?.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      console.log(123);
      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const newUser = { ...user, img: downloadURL,...updateInfo};
            updateUserInfo(dispatch,newUser);
          });
        }
      );
    } else {
      updateUserInfo(dispatch,{...user,...updateInfo})
    }
  };
  console.log("file",updateInfo)
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={user?.img
              ? user?.img
              : "https://mcdn.coolmate.me/image/April2022/meme-cho-shiba-15.jpg"}
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.username}</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user.username}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">VIETNAM</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder={user.username}
                  className="userUpdateInput"
                  name="username"
                  value={updateInfo.username}
                  onChange={handleUpdate}
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="email"
                  placeholder={user.email}
                  className="userUpdateInput"
                  name="email"
                  value={updateInfo.email}
                  onChange={handleUpdate}
                />
              </div>
              <div className="userUpdateItem">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Don't change this without user's permission"
                  className="userUpdateInput"
                  name="password"
                  value={updateInfo.password}
                  onChange={handleUpdate}
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src={user?.img
                  ? user?.img
                  : "https://mcdn.coolmate.me/image/April2022/meme-cho-shiba-15.jpg"}
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} onChange={(e)=> setFile(e.target.files[0])}/>
              </div>
              <button className="userUpdateButton" onClick={updateUser}>Update</button>
              {err && <div style={{color:"red"}}>Oh some thing went wrong please try again</div>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
