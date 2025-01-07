import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Content from "./routes/Content";
import Post from "./routes/Post";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: `/blog`, element: <Content /> },
  { path: "/make-post", element: <Post /> },
]);
