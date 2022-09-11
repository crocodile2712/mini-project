import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import { actionCartDecrease, actionCartIncrease } from "../redux/cart/action/action";

function CartItem({item,index}) {
  const cartList = useSelector(state => state.cart.cartList)
  
  const dispatch = useDispatch()
  const handleAse =()=>{
    dispatch(actionCartIncrease(index))
  }
  const handleDes =()=>{
      dispatch(actionCartDecrease(index))
    return
  }
  return (
    <div>
      <div className="cart-product">
        <div className="cart-product-item">
          <img
            src={item.img}
            className="cart-product-img"
            alt="img"
          />
          <div className="cart-product-des">
            <div>
              <b>Product: </b>
              {item.title}
            </div>
            <div>
              <b>ID: </b>
              123
            </div>
            <div className="cart-color" style={{backgroundColor: `${item.color}`}}></div>
            <div>
              <b>Size: </b>
              {item.size}
            </div>
          </div>
        </div>
        <div className="cart-quantity">
          <div className="cart-add-remove">
            <RemoveIcon className="cart-icon" onClick={handleDes} />
            <p>{item.quantity}</p>
            <AddIcon className="cart-icon" onClick={handleAse}/>
          </div>
          <div className="cart-product-total">{`$ ${item.price * item.quantity}`}</div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
