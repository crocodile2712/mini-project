import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import {actionLogin} from "../redux/auth/action";
import "./Page.css";

function Login() {
  const dispatch = useDispatch()
  const err = useSelector(state =>state.auth.message)
  const initialState ={
    username: "",
    password: "",
  }
  const [inputValue, setInputValue] = useState(initialState);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value
    });
  };
  
  const submitForm=(e)=>{
    e.preventDefault()
    dispatch(actionLogin(inputValue))
  }
  console.log("err",err)
  
  return (
    <div className="login">
      <div className="login-wrapper">
        <h1>SIGN IN</h1>
        <form className="login-form" onSubmit={submitForm}>
          <input
            className="login-input"
            placeholder="username"
            name="username"
            value={inputValue.username}
            onChange={handleInputChange}
          ></input>
          <input
            className="login-input"
            placeholder="password"
            type="password"
            name="password"
            value={inputValue.password}
            onChange={handleInputChange}
          ></input>
          <button className="login-button" type='submit'>LOGIN</button>
          <p className="login-link">DO NOT YOU REMEMBER THE PASSWORD?</p>
          <p className="login-link">CREATE A NEW ACCOUNT</p>
        </form>
        {err && <div style={{color:"red"}}>{err.response.data}</div>}
      </div>
    </div>
  );
}

export default Login;
