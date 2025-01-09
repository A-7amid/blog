import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFoundPage from "./routes/NotFoundPage";
import NewPost from "./routes/NewPost";
import PostContent from "./routes/PostContent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  { path: "/post/:postTitle/:mainContent", element: <PostContent /> },
  { path: "/new", element: <NewPost /> },
]);
