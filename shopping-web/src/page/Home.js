import React from "react";
import Slider from "../components/Slider";

import CategoryItems from "../components/CategoryItems";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";

function Home() {
  return (
    <div>
        <Slider />
        <CategoryItems />
        <Products />
        <Newsletter />
    </div>
  );
}

export default Home;
