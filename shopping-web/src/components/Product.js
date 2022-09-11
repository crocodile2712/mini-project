import React from "react";
import "./Componentcss.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionWishList } from "../redux/cart/action/action"
function Product({ item }) {
  const clickedStyle = {
    backgroundColor: "#E4405F",
  };
  const wishList = useSelector((state) => state.wish.wishList);
  const dispatch = useDispatch();
  const clicked = wishList.findIndex((ele) => {
    return ele === item._id;
  });   
  const handleClick =() =>{
    console.log("id",item._id)
    dispatch(actionWishList(item._id))
  }
  return (
    <div className="product">
      <div className="product-circle"></div>
      <img src={item.img} alt="Product" className="product-img"></img>
      <div className="product-icons">
        <div
          className="product-icon"
          onClick={handleClick}
          style={clicked !== -1 ? clickedStyle : {}}
        >
          <FavoriteBorderIcon />
        </div>
        <Link to={`/product-page/${item._id}`} className="product-icon">
          <ShoppingCartOutlinedIcon />
        </Link>
        <Link to={`/product-list/${item.categories[0]}`} className="product-icon">
          <SearchIcon />
        </Link>
      </div>
    </div>
  );
}

export default Product;
