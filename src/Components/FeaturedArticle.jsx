import { Heart, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { usePosts } from "../context/posts.context";

const FeaturedArticle = () => {
  const { isFilter } = usePosts();

  return (
    !isFilter && (
      <header className="flex flex-col lg:w-[90%] xl:w-[80%]">
        <h3 className="text-4xl font-bold text-center roboto-mono mt-6 mb-4">
          Featured Story
        </h3>

        <span className="text-xl font-[400] text-gray-500 text-center mb-8">
          Handpicked by our editorial team
        </span>

        <div className="flex flex-col lg:flex-row border-2 border-opacity-10 rounded-lg">
          <div className="relative lg:hidden rounded-t-lg overflow-hidden items-center justify-center h-[220px]">
            <img
              src="https://online.keele.ac.uk/wp-content/uploads/2024/05/AI-Developments.jpg"
              alt="image topic"
              className="flex w-full rounded-l-lg md:-mt-28"
            />
          </div>

          <div className="relative">
            <img
              src="https://online.keele.ac.uk/wp-content/uploads/2024/05/AI-Developments.jpg"
              alt="image topic"
              className="hidden lg:flex h-full w-full rounded-l-lg"
            />
          </div>

          <div className="flex flex-col mt-5 lg:mt-3 cursor-default mx-5 text-zinc-600">
            <div className="flex gap-x-1 opacity-80 mb-4 text-blue-700 bg-blue-100 w-fit rounded-2xl text-xs font-semibold px-3.5 py-1">
              <span>In</span>
              <span className="flex font-medium hover:underline">{`React JS`}</span>
              <span>by</span>
              <span className="flex font-medium hover:underline">{`Tobi`}</span>
            </div>
            <Link
              to="/post-tobi"
              className="text-2xl text-black font-bold w-fit mb-4 hover:text-blue-800 duration-200 cursor-pointer"
            >
              Latest Advancements in Artificial Intelligence
            </Link>
            <p className="text-black opacity-55 font-medium text-sm tracking-wide cursor-text mb-7">
              Explore with us the latest developments in the world of AI and
              their impact on our daily lives. From machine learning
              breakthroughs to ethical considerations, discover how artificial
              intelligence is reshaping our future.
            </p>
            <div className="flex flex-row items-center gap-2 select-none h-full pb-6">
              <div className="flex items-center gap-1 hover:text-red-600 cursor-pointer transition duration-200">
                <Heart strokeWidth={2.5} size={16} />
                <span className="text-xs">120</span>
              </div>
              <div className="flex items-center gap-1 hover:text-black cursor-pointer transition duration-200">
                <MessageCircle size={16} />
                <span className="text-xs">17</span>
              </div>

              <div className="flex justify-end w-full mr-5">
                <Link
                  to="/post-tobi"
                  className="text-gray-100 bg-gray-800 hover:bg-gray-700 duration-150 transition rounded-md px-4 py-2 text-xs cursor-pointer"
                >
                  Read More
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
