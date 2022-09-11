import React from "react";
import { Badge } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Componentcss.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionLogout } from "../redux/auth/action";

function Navbar() {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.cartList);
  const user = useSelector(state => state.auth.authUser)
  function logout(e){
    e.preventDefault();
    dispatch(actionLogout());
  }
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <form className="navbar-child">
          <select>
            <option>EN</option>
            <option>VN</option>
          </select>
          <div className="search-container">
            <input placeholder="Search" style={{ border: "none" }}></input>
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </div>
        </form>
        <div className="navbar-child">
          <Link to="/">
            <h1>LAMA.</h1>
          </Link>
        </div>
        <div className="navbar-child">
          {!user ? (
            <>
              <div>
                <Link to="/auth/register">REGISTER</Link>
              </div>
              <div>
                <Link to="/auth/login">SIGN IN</Link>
              </div>
            </>
          ) : (
            <>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVBI1xW9oWY4QBnRFRnlTc9OMjhpKctW5E_A&usqp=CAU"
                style={{
                  width: "40px",
                  borderRadius: "100px",
                  marginRight: "-20px",
                }}
                alt={"img"}
              />
              <div>
                {user.username}
              </div>
              <div>
                <Link to="/auth/login" onClick={logout}>Logout</Link>
              </div>
            </>
          )}
          <div>
            <Link to="/cart">
              <Badge badgeContent={cartList.length} color="primary">
                <ShoppingCartOutlinedIcon className="cart-icon" />  
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
