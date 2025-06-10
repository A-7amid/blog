import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router.jsx";
import { RouterProvider } from "react-router-dom";
import { PostsProvider } from "./context/posts.context.jsx";

createRoot(document.getElementById("root")).render(
  <PostsProvider>
    <RouterProvider router={router} />
  </PostsProvider>
);

export default PostsProvider;
