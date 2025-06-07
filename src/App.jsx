import Posts from "./Components/Posts";
import Navbar from "./Components/Navbar";
import FeaturedArticle from "./Components/FeaturedArticle";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="min-h-screen max-h-full flex flex-col roboto-mono">
      <Navbar />
      <div className="flex flex-grow items-center container mx-auto flex-col px-4 mb-8">
        <FeaturedArticle />

        <h2 className="mt-12 my-3 flex text-2xl font-bold roboto-mono">
          Latest Articles
        </h2>
        <Posts />
      </div>
      <Footer />
    </div>
  );
};

export default App;
