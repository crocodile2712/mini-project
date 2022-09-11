import React from "react";

function Discount() {
  return (
    <div
      style={{
        backgroundColor: "teal",
        color: "white",
        justifyContent: "center",
        height: "30px",
        fontSize: "14px",
        fontWeight: "500",
        display:"flex",
        alignItems: "center",
        zIndex: "50"
      }}
    >
      <p>Super Deal! Free Shipping on Orders Over $50</p>
    </div>
  );
}

export default Discount;
