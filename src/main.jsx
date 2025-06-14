import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router.jsx";
import { RouterProvider } from "react-router-dom";
import { PostsProvider } from "./context/posts.context.jsx";
import { AuthProvider } from "./context/authentication.context.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <PostsProvider>
      <RouterProvider router={router} />
    </PostsProvider>
  </AuthProvider>
);

export default PostsProvider;
