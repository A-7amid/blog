import React, { createContext, StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { router } from "./router.jsx";
import { RouterProvider } from "react-router-dom";

const PostProvider = React.createContext();

createRoot(document.getElementById("root")).render(
  <PostProvider.Provider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </PostProvider.Provider>
);

export default PostProvider;
