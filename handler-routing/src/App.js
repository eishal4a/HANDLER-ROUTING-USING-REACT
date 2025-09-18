// src/App.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Product />,   // Home → Product
  },
  {
    path: "/cart",
    element: <Cart />,      // /cart → Cart
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
