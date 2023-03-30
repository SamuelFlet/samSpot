import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import App from "./pages/App";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Featured from "./pages/Featured";
import Posts from "./pages/Posts";
import Post from "./pages/Post";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <Featured />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/posts/:postID",
        element: <Post />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
