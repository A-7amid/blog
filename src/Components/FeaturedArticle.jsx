import { ArrowRight, Heart, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { usePosts } from "../context/posts.context";

const FeaturedArticle = () => {
  const { isFilter } = usePosts();

  return (
    !isFilter && (
      <header className="flex flex-col lg:w-[90%] xl:w-[80%] mx-auto container mb-12 -translate-y-14">
        <h3 className="text-4xl font-bold text-center roboto-mono mt-6 mb-4">
          Featured Story
        </h3>

        <span className="text-xl font-[400] text-gray-500 text-center mb-8">
          Handpicked by our editorial team
        </span>

        <div className="flex flex-col lg:flex-row mt-8 bg-white rounded-lg shadow-2xl">
          <div className="relative lg:hidden rounded-t-lg overflow-hidden items-center justify-center h-[220px]">
            <img
              src="https://online.keele.ac.uk/wp-content/uploads/2024/05/AI-Developments.jpg"
              alt="image topic"
              className="flex w-full rounded-l-lg md:-mt-28"
            />
          </div>

          <div className="relative">
            <span className="border border-white/50 hover:border-white/30 bg-white/20 hover:bg-black/90 transition duration-200 font-bold text-white px-3 py-0.5 text-xs rounded-4xl absolute top-5 left-2">
              🔥 Trending
            </span>
            <img
              src="https://online.keele.ac.uk/wp-content/uploads/2024/05/AI-Developments.jpg"
              alt="image topic"
              className="hidden lg:flex lg:w-[2300px] h-full w-full rounded-l-lg"
            />
          </div>

          <div className="flex flex-col mt-5 lg:mt-3 cursor-default mx-12 py-8 text-zinc-600">
            <div className="flex hover:bg-blue-50 transition duration-200 gap-x-1 opacity-80 mb-4 text-blue-700 bg-blue-100 w-fit rounded-xl text-xs font-semibold px-3 py-1">
              <span className="flex font-medium hover:underline">{`AI & Technology`}</span>
              <span>• by</span>
              <span className="flex font-medium hover:underline">{`Sarah Chen`}</span>
            </div>
            <Link
              to="/post-tobi"
              className="text-3xl text-black font-bold w-fit mb-4 hover:text-blue-800 duration-200 cursor-pointer"
            >
              The Revolutionary Impact of AI on Modern Development
            </Link>
            <p className="text-gray-600 text-lg tracking-wide cursor-text mb-7">
              Discover how artificial intelligence is transforming the way we
              build software, from automated code generation to intelligent
              debugging. This comprehensive guide explores the tools and
              techniques that are reshaping our industry.
            </p>
            <div className="flex flex-row items-center text-gray-600 gap-5 select-none h-full ">
              <div className="flex items-center gap-2">
                <Heart color="red" size={21} />
                <span>1.2K</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="stroke-blue-400" size={22} />
                <span>89</span>
              </div>

              <div className="flex justify-end w-full mr-5">
                <Link
                  to="/post-tobi"
                  className="flex items-center shadow-2xl cursor-pointer hover:from-[#1b47b7] hover:to-[#05968f] gap-4 bg-gradient-to-r from-primary to-[#00b1a8] rounded-md px-4 py-2 text-md text-white"
                  // className="text-gray-100 bg-gray-800 hover:bg-gray-700 duration-150 transition rounded-md px-4 py-2 text-xs cursor-pointer"
                >
                  Read Full Story
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  );
};

export default FeaturedArticle;
