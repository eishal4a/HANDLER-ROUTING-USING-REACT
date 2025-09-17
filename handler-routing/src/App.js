import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

function Home() {
  return <h1>🏠 Home Page</h1>;
}
function About() {
  return <h1>ℹ️ About Page</h1>;
}
