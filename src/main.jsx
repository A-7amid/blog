import React, { createContext, StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router.jsx";
import { RouterProvider } from "react-router-dom";
import { PostsProvider } from "./context/provider.context.jsx";

createRoot(document.getElementById("root")).render(
  <PostsProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </PostsProvider>
);

export default PostsProvider;
