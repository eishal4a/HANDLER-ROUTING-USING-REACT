import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Product />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
