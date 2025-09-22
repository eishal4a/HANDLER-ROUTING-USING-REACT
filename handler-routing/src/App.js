import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";

function AppRoutes() {
  // define routes using hook
  let routes = useRoutes([
    { path: "/", element: <Product /> },
    { path: "/cart", element: <Cart /> },
  ]);

  return routes; 
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
