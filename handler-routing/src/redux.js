// App.js
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider, useSelector, useDispatch } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// 1. Redux Slice
const userSlice = createSlice({
  name: "user",
  initialState: { user: null },
  reducers: {
    login: (state, action) => {
      state.user = { name: action.payload };
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

const { login, logout } = userSlice.actions;
const store = configureStore({ reducer: { user: userSlice.reducer } });

// 2. Home Component (uses Redux)
function Home() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Home Page</h1>
      {user ? (
        <>
          <p>Welcome, {user.name} </p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <button onClick={() => dispatch(login("Ali"))}>Login</button>
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
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
