import { createRoot } from "react-dom/client";
import "./index.css";
import { PostsProvider } from "./context/posts.context.jsx";
import { AuthProvider } from "./context/authentication.context.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeaturedArticleContent from "./Components/FeaturedArticleContent.jsx";
import { ResetPassowrdPage } from "./routes/ResetPassowrdPage.jsx";
import PostContent from "./routes/PostContent.jsx";
import { SignupPage } from "./routes/SignupPage.jsx";
import { LoginPage } from "./routes/LoginPage.jsx";
import { Search } from "lucide-react";
import NewPost from "./routes/NewPost.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <AuthProvider>
      <PostsProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/create-post" element={<NewPost />} />
          <Route path="/post/:postTitle" element={<PostContent />} />
          <Route path="/password_reset" element={<ResetPassowrdPage />} />
          <Route path="/post-tobi" element={<FeaturedArticleContent />} />
        </Routes>
      </PostsProvider>
    </AuthProvider>
  </Router>
);

export default PostsProvider;
