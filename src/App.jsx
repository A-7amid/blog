import Posts from "./Components/Posts";
import FeaturedArticle from "./Components/FeaturedArticle";
import Footer from "./Components/Footer";
import { usePosts } from "./context/posts.context";
import Navbar from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import { Features } from "./Components/Features";

const App = () => {
  const { isFilter } = usePosts();
  return (
    <div className="min-h-screen max-h-full flex flex-col roboto-mono">
      <Navbar searchable={true} />
      <div className="flex grow items-center container mx-auto flex-col px-4 mb-8">
        <Hero />
        <FeaturedArticle />
        <Posts />
        <Features />
      </div>
      <Footer />
    </div>
  );
};

export default App;
