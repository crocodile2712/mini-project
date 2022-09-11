import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { actionEmptyReg } from "../redux/register/action";

function RegSuccess() {
  const reg = useSelector((state) => state.reg.register);
  const history = useHistory();
  const dispatch=  useDispatch()
  useEffect(()=>{
    const regS = ()=>{
      history.push('/')
    }
    !reg && regS();
},[reg,history])

    const goHome = ()=>{
        dispatch(actionEmptyReg());
    }
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Congrat you have successfully create your acount</h1>
      <h1>Please go back to our homepage and login to use our service</h1>
      <Link
        to={"/"}
        style={{
          padding: 10,
          marginTop: 20,
          border: "2px solid black",
          textDecoration: "none",
          color: "white",
          backgroundColor: "pink",
        }}
        onClick={goHome}
      >
        Go to Homepage
      </Link>
    </div>
  );
}

export default RegSuccess;
