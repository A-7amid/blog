import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFoundPage from "./routes/NotFoundPage";
import NewPost from "./routes/NewPost";
import PostContent from "./routes/PostContent";
import Search from "./routes/Search";
import FeaturedArticleContent from "./Components/FeaturedArticleContent";
import { LoginPage } from "./routes/LoginPage";
import { SignupPage } from "./routes/SignupPage";
import { ResetPassowrdPage } from "./routes/ResetPassowrdPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  { path: "/post/:postTitle", element: <PostContent /> },
  { path: "/create-post", element: <NewPost /> },
  { path: "/search", element: <Search /> },
  { path: "/post-tobi", element: <FeaturedArticleContent /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
  { path: "/password_reset", element: <ResetPassowrdPage /> },
]);
