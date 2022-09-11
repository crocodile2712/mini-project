import { categories } from "../data";
import React from "react";
import Categories1 from "./Categories1";
import "./Componentcss.css"


function CategoryItems() {
  return (
    <div className="categories-items">
      {categories.map((ele) => {
        return <Categories1 item={ele} key={ele.id}/>;
      })}
    </div>
  );
}

export default CategoryItems;
