import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { usePosts } from "../context/posts.context";
import { useEffect } from "react";
import Footer from "../Components/Footer";
import { Heart, MessageCircle, Share2 } from "lucide-react";

const FeaturedArticleContent = () => {
  const { posts } = usePosts();

  const params = useParams();

  for (let post of posts) {
    if (post.title == params.postTitle) {
      var content = post.content;
      var image = post.img;
      var userName = post.userName;
      var date = post.date;
    }
    continue;
  }

  return (
    <div className="flex flex-col roboto-mono min-h-screen max-h-full">
      <Navbar />
      <div className="bg-white flex flex-col container flex-grow items-center mx-auto max-w-3xl px-4 mb-10 mt-4">
        <img
          src="https://online.keele.ac.uk/wp-content/uploads/2024/05/AI-Developments.jpg"
          alt="image"
          className="overflow-hidden mb-10 md:rounded-t-lg"
        />
        <div>
          <h1 className="flex gap-x-2 mb-8 items-center">
            <span className="rounded-full bg-gray-300 size-10 flex justify-center items-center font-medium text-xl">
              T
            </span>
            <div className="flex flex-col">
              <span className="font-semibold text-sm">Tobi</span>
              <span className="opacity-60 text-sm">
                Posted on Tue Oct 22 2024
              </span>
            </div>
          </h1>

          <h1 className="text-black text-2xl font-bold md:font-semibold opacity-90 mb-6 ">
            Latest Advancements in Artificial Intelligence
          </h1>

          <p className="text-md opacity-85">
            If you've ever found yourself repeatedly Googling the same code
            snippets, then SnipNest is something you'll find very useful. It's a
            place to share snippets with ease. Why SnipNest?The idea for
            SnipNest came from my own frustrations. As a developer, I often need
            quick solutions to problems I've solved a dozen times before. While
            there are plenty of resources out there, I didn't find one that
            would fit my preference. I wanted a structured, easy-to-use, and
            searchable collection of snippets. That's how SnipNest was born.
          </p>
        </div>

        <div className="flex mt-10 w-full">
          <div className="flex justify-start gap-x-4">
            <div className="border-2 gap-x-1 cursor-pointer border-opacity-20 rounded-lg flex py-0.5 justify-center items-center text-sm px-3 hover:bg-slate-100 duration-75">
              <Heart size={15} />
              <span>Like</span>
            </div>
            <div className="border-2 gap-x-1 cursor-pointer border-opacity-20 rounded-lg flex py-0.5 justify-center items-center text-sm px-3 hover:bg-slate-100 duration-75">
              <MessageCircle size={15} />
              <span>Comment</span>
            </div>
          </div>

          <div className="flex justify-end flex-1 items-center">
            <div className="border-2 gap-1 cursor-pointer border-opacity-20 rounded-lg flex py-0.5 justify-center items-center text-sm px-2 hover:bg-slate-100 duration-75">
              <Share2 size={15} />
              <span> Share</span>
            </div>
          </div>
        </div>
        <div className="border-2 border-opacity-20 rounded-lg flex flex-col justify-center items-center mt-8 h-32 w-full">
          <div className="h-full w-full flex flex-col gap-4 p-6">
            <h2 className="text-md font-medium">Comments</h2>

            <span className="flex text-sm text-slate-500 opacity-95">
              There are no comments yet. Be the first to comment!
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FeaturedArticleContent;
