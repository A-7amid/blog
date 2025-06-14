import Posts from "./Components/Posts";
import FeaturedArticle from "./Components/FeaturedArticle";
import Footer from "./Components/Footer";
import { usePosts } from "./context/posts.context";
import Navbar from "./Components/Navbar";

const App = () => {
  const { isFilter } = usePosts();
  return (
    <div className="min-h-screen max-h-full flex flex-col roboto-mono">
      <Navbar searchable={true} />

      <div className="flex grow items-center container mx-auto flex-col px-4 mb-8">
        <FeaturedArticle />
        {!isFilter && (
          <h2 className="mt-10 my-3 flex text-2xl font-bold roboto-mono">
            Latest Articles
          </h2>
        )}

        <Posts />
      </div>
      <Footer />
    </div>
  );
};

export default App;
