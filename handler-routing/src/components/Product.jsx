import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../cartSlice";
import { Link } from "react-router-dom";

function Product() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Product Page</h1>
      <button onClick={() => dispatch(addToCart("Apple"))}>
        Add Apple
      </button>
      <br />
      {/* 👇 This will change the URL to /cart */}
      <Link to="/cart">See Cart</Link>
    </div>
  );
}

export default Product;
