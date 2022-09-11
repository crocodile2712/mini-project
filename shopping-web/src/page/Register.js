import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { actionRegister } from "../redux/register/action";
import "./Page.css";

function Register() {
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
  });
  const history = useHistory();
  const [confirm, setConfirm] = useState({ confirm: "" });
  const [boolean, setBoolean] = useState(true);
  const dispatch = useDispatch();
  const reg = useSelector((state) => state.reg.register);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };
  const handleConfirmChange = (e) => {
    const { name, value } = e.target;
    setConfirm({ ...confirm, [name]: value });
  };
  const check = () => {
    if (confirm.confirm === register.password) {
      setBoolean(true);
    } else {
      setBoolean(false);
    }
  };
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(actionRegister(register));
  };

  useEffect(()=>{
    const regS = ()=>{
      history.push('/regsuccess')
    }
    reg && regS();
},[reg,history])
  return (
    <div className="register">
        <div className="register-wrapper">
          <h1>CREATE AN ACCOUNT</h1>
          <form className="register-form" onSubmit={submitForm}>
            <input
              placeholder="username"
              required
              onChange={handleInputChange}
              name="username"
              value={register.username}
            ></input>
            <input
              placeholder="email"
              required
              onChange={handleInputChange}
              name="email"
              value={register.email}
              type="email"
            ></input>
            <input
              placeholder="password"
              required
              onChange={handleInputChange}
              name="password"
              value={register.password}
              type="password"
            ></input>
            <input
              placeholder="confirm password"
              required
              name="confirm"
              onChange={handleConfirmChange}
              onKeyUp={check}
              type="password"
            ></input>
            {!boolean ? (
              <div style={{ color: "red", marginLeft: "300px" }}>Not Match</div>
            ) : (
              <div></div>
            )}
            <span>
              'By creating an account, I consent to the processing of my
              personal data in accordance with the '<b>PRIVACY POLICY</b>
            </span>
            <button type="submit">CREATE</button>
          </form>
        </div>
    </div>
  );
}

export default Register;
