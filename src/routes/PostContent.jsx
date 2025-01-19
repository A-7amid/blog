import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { usePosts } from "../context/provider.context";
import { useEffect } from "react";
import Footer from "../Components/Footer";

const PostContent = () => {
  const { posts } = usePosts();

  const params = useParams();

  for (let post of posts) {
    if (post.title == params.postTitle) {
      var content = post.content;
      var image = post.img;
    }
    continue;
  }

  return (
    <div>
      <Navbar />
      <div className="bg-white flex flex-col items-center mx-auto md:w-[55%] mb-24 mt-4">
        <img
          src={image}
          alt="image"
          className="overflow-hidden mb-10 md:rounded-t-lg"
        />
        <div className="md:mx-auto mx-4">
          <h1 className="text-black text-3xl font-bold sm:text-4xl md:text-5xl md:font-semibold opacity-90 mb-6 ">
            {params.postTitle}
          </h1>

          <p className="text-lg opacity-85">{content}</p>
        </div>

        <div className="flex mt-10 w-full">
          <div className="flex justify-start gap-x-4">
            <div className="border-2 cursor-pointer border-opacity-20 rounded-lg flex py-1 justify-center items-center font-medium text-xl px-3 hover:bg-slate-100 duration-75">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/windows/32/228BE6/facebook-like.png"
                alt="like"
                className="mr-2"
              />
              Like
            </div>
            <div className="border-2 cursor-pointer border-opacity-20 rounded-lg flex py-1 justify-center items-center font-medium text-xl px-3 hover:bg-slate-100 duration-75">
              <img
                src="https://img.icons8.com/?size=20&id=22050&format=png&color=228BE6"
                alt="comment"
                className="mr-2"
              />
              Comment
            </div>
          </div>

          <div className="flex justify-end flex-1 items-center">
            <div className="border-2 cursor-pointer border-opacity-20 rounded-lg flex py-1 justify-center items-center font-medium text-xl px-3 hover:bg-slate-100 duration-75">
              <img
                src="/imgs/share.png"
                alt="share"
                className="size-4 flex mr-2"
              />
              Share
            </div>
          </div>
        </div>
        <div className="border-2 border-opacity-20 rounded-lg flex flex-col justify-center items-center mt-8 h-32 w-full">
          <div className="h-full w-full flex flex-col gap-4 p-6">
            <h2 className="text-xl font-medium">Comments</h2>

            <span className="flex text-slate-500 opacity-95">
              There are no comments yet. Be the first to comment!
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PostContent;
