import { useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const history = useHistory();
  const order = location.state?.order;


  useEffect(() => {
    !order && history.push("/");
  }, [history, order]);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
       <div>  `Order has been created successfully. Your order number is ${order?._id}`</div>
      <Link
        to={"/"}
        style={{
          padding: 10,
          marginTop: 20,
          border: "2px solid black",
          textDecoration: "none",
          color: "white",
          backgroundColor: "pink",
        }}
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default Success;
