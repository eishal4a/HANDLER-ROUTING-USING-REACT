// src/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from './cartSlice';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>🛒 Cart</h2>
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
    </div>
  );
}

export default Cart;
