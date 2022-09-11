import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./Componentcss.css";
import { useDispatch, useSelector } from "react-redux";
import { actionFetchProducts } from "../redux/products/action";

function Products({ cat, filters, sort }) {
  const products = useSelector(state => state.prod.products)
  const [filteredProduct, setFilterProduct] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    cat ? dispatch(actionFetchProducts(cat)) : dispatch(actionFetchProducts())
  }, [cat,dispatch]);

  useEffect(() => {
    cat &&
      setFilterProduct(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilterProduct((prev) =>
        [...prev].sort((a, b) => a.creatAt - b.creatAt)
      );
    }
    if (sort === "asc") {
      setFilterProduct((prev) => [...prev].sort((a, b) => a.price - b.price));
    }
    if (sort === "desc") {
      setFilterProduct((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);
  return (
    <div className="products">
      {cat
        ? filteredProduct.map((ele) => {
            return <Product item={ele} key={ele._id} />;
          })
        : products.slice(0,7).map((ele) => {
          return <Product item={ele} key={ele._id} />;
        })}
    </div>
  );
}

export default Products;
