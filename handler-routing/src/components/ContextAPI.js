// App.js
import React, { useState, useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// 1. Create Context
const UserContext = React.createContext();

// 2. Home Component (uses context)
function Home() {
  const { user, login, logout } = useContext(UserContext);

  return (
    <div>
      <h1>Home Page</h1>
      {user ? (
        <>
          <p>Welcome, {user.name} </p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login("Ali")}>Login</button>
      )}
    </div>
  );
}

// 3. About Component
function About() {
  return <h1>About Page</h1>;
}

// 4. Router
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
]);

// 5. App with Provider
function App() {
  const [user, setUser] = useState(null);

  const login = (name) => setUser({ name });
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
