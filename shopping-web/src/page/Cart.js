import React, { useEffect, useState } from "react";
import "./Page.css";
import { Link, useHistory } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useSelector, useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { Button } from "@mui/material";
import { actionPayment, emptyPayment } from "../redux/payment/action";
import { userRequest } from "../httpResquest/axios";
import { emptyCart } from "../redux/cart/action/action";
function Cart() {
  const wishList = useSelector((state) => state.wish.wishList);
  const cartList = useSelector((state) => state.cart.cartList);
  const authUser = useSelector((state) => state.auth.authUser);
  const dispatch = useDispatch();
  const [order,setOrder] = useState(null)
  const history = useHistory()
  const cart = useSelector((state) => state.cart.cartList);
  const totalPrice = cartList.reduce((total, ele) => {
    return total + ele.quantity * ele.price;
  }, 0);
  const KEY = process.env.REACT_APP_STRIPE;
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };
  const paymentData = useSelector(state => state.pay.payment)
  
  const makeRequest = () =>{
    dispatch(actionPayment({
      tokenId: stripeToken.id,
      amount:totalPrice * 100
    }))
  }

  const createOrder = async () => {
    try {
      const res = await userRequest.post("orders", {
        userId: authUser._id,
        products: cart.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
          size: item.size,
          color: item.color,
        })),
        amount: totalPrice,
        address: paymentData.billing_details.address,
      });
      setOrder(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    if(stripeToken) {
      makeRequest();
    }
  }, [stripeToken]);

  useEffect(() => {
    if(paymentData) {
      createOrder()
    }
  },[paymentData])
  useEffect(()=>{
    if(order){
      dispatch(emptyCart());
      dispatch(emptyPayment());
      history.push("/success",{
        order: order
      })
      setOrder(null)
    }
  },[history,order,dispatch])

  return (
    <div>
      <div className="cart">
        <div className="cart-header">
          <h1>YOUR BAG</h1>
        </div>
        <div className="cart-nav">
          <Link className="cart-nav-continue" to="/">
            <button className="cart-nav-home">CONTINUE SHOPPING</button>
          </Link>
          <div className="cart-nav-bag">
            <p>Shopping Bag({cartList.length})</p>
            <p>Your Wishlist ({wishList.length})</p>
          </div>
          <div className="cart-nav-checkout">
            <button>CHECKOUT NOW</button>
          </div>
        </div>
        <div className="cart-order">
          <div className="cart-products">
            {cartList.map((ele, index) => {
              return <CartItem item={ele} key={index} index={index} />;
            })}
          </div>
          <div className="cart-summary">
            <div className="cart-summary-info">
              <h1>ORDER SUMMARY</h1>
              <div>
                {cartList.map((ele) => {
                  return (
                    <div className="cart-summary-price" key={ele._id}>
                      <div>{ele.title + "(x" + ele.quantity + ")"}</div>
                      <div>{"$" + ele.quantity * ele.price}</div>
                    </div>
                  );
                })}
              </div>
              <>
                {cartList.length !== 0 && (
                  <>
                    <div className="cart-summary-price">
                      <div>Estimated Shipping</div>
                      <div>$5.90</div>
                    </div>
                    <div className="cart-summary-price">
                      <div>Shipping Discount</div>
                      <div>-$5.90</div>
                    </div>
                  </>
                )}
              </>
              <div className="cart-summary-price cart-summary-price-total">
                <div>Total</div>
                <div>{"$" + totalPrice}</div>
              </div>
            </div>
            <div>
              <StripeCheckout
                name="Tien Shop"
                image="https://lh3.googleusercontent.com/a-/AFdZucr5AVGcy_5XqdF9jMtYQa63nWYQUuqIEZXij0S9tA=s96-c-rg-br100"
                billingAddress
                shippingAddress
                description={`Your cart total is $${totalPrice}`}
                amount={totalPrice * 100}
                token={onToken}
                stripeKey={KEY}
              >
                <div className="cart-summary-button">
                  <Button>CHECKOUT NOW</Button>
                </div>
              </StripeCheckout>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
