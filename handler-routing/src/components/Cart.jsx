import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../cartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>🛒 Cart</h1>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      <br />
      {/* 👇 This will go back to / */}
      <Link to="/">Back to Product</Link>
    </div>
  );
}

export default Cart;
