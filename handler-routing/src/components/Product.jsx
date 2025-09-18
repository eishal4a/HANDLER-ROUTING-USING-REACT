import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../cartSlice"; // ✅ must come from cartSlice

function Product() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>🍏 Product Page</h1>
      <button onClick={() => dispatch(addToCart("Apple 🍎"))}>
        Add Apple
      </button>
    </div>
  );
}

export default Product;
