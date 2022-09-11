import React, { useEffect, useState } from "react";
import Newsletter from "../components/Newsletter";
import "./Page.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionAddCart } from "../redux/cart/action/action";
import { actionFetchSingleProduct } from "../redux/products/action";

function ProductPage() {
  const product = useSelector(state => state.prod.product)
  const [productNumber, setProductNumber] = useState(1);
  const [color, setColor] = useState(product.color[0]);
  const [size, setSize] = useState(product.size[0]);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionFetchSingleProduct(id))
  }, [id,dispatch]);
  useEffect(()=>{
    setColor(product.color[0])
    setSize(product.size[0])
  },[product])
  const handleAse = () => {
    setProductNumber(productNumber + 1);
    console.log(product);
  };
  const handleDes = () => {
    if (productNumber - 1 === 0) {
      return;
    }
    setProductNumber(productNumber - 1);
  };
  const handleAddToCart = () => {
    console.log("product",{ ...product, total: productNumber , size, color})
    return dispatch(actionAddCart({ ...product, quantity: productNumber , size, color, id: `${id}`,_id:`${id}/${color}/${size}`}));
  };
  return (
    <div>
      <div className="productp">
        <img className="productp-img" src={product.img} alt="img" />
        <div className="productp-about">
          <h1 className="productp-title">{product.title}</h1>
          <p className="productp-des">{product.desc}</p>
          <span className="productp-price">{`$ ${product.price}`}</span>
          <div className="productp-color-size">
            <div className="productp-color">
              <p>Color</p>
              {product.color.map((ele) => {
                return (
                  <div
                    className="productp-choose-color"
                    style={{
                      backgroundColor: `${ele.toLowerCase()}`, border: `${color === ele ? `2px solid black` : ``}`
                    }}
                    key={ele}
                    onClick={() => setColor(ele)}
                  ></div>
                );
              })}
            </div>
            <div className="productp-size">
              <span>Size</span>
              <select className="productp-select" onClick={(e) => setSize(e.target.value)}>
                {product.size.map((ele) => {
                  return (
                    <option
                      key={ele}
                      value={ele}
                    >{`${ele}`}</option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="productp-quantity">
            <div className="productp-add-remove">
              <RemoveIcon className="productp-icon" onClick={handleDes} />
              <p className="productp-total">{productNumber}</p>
              <AddIcon className="productp-icon" onClick={handleAse} />
            </div>
            <Link
              to="/cart"
              className="productp-button"
              onClick={handleAddToCart}
            >
              ADD TO CART
            </Link>
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
}

export default ProductPage;
