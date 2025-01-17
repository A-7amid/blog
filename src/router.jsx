import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFoundPage from "./routes/NotFoundPage";
import NewPost from "./routes/NewPost";
import PostContent from "./routes/PostContent";
import Search from "./routes/Search";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  { path: "/post/:postTitle", element: <PostContent /> },
  { path: "/new", element: <NewPost /> },
  { path: "/search", element: <Search /> },
]);
