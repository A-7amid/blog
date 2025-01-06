import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import BlogPage from "./routes/BlogPage";
import Blog from "./routes/MakeBlog/Blog";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/blog", element: <BlogPage /> },
  { path: "/make-blog", element: <Blog /> },
]);
