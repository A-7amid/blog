import React, { useEffect, useRef, useState } from "react";
import { usePosts } from "../context/provider.context";
import { Link } from "react-router-dom";

const NewPost = () => {
  const [isClicked, setIsClicked] = useState(false);

  const inputRef = useRef();

  const { createPost } = usePosts();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsClicked(!isClicked);
    createPost({
      title: e.target.title.value,
      content: e.target.content.value,
      img: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/uploads/articles/react-hooks-guide.png",
    });
    e.target.title.value = "";
    e.target.content.value = "";
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="w-full bg-zinc-100 h-screen">
      <Navbar />
      {isClicked && <Prompt />}
      <form onSubmit={handleFormSubmit} className="w-7/12 mx-auto">
        <div className="flex mt-4">
          <input
            ref={inputRef}
            type="text"
            placeholder="New post title here..."
            className="w-full font-bold text-4xl outline-none px-12 p-8 rounded-lg  placeholder-black placeholder-opacity-60"
            name="title"
          />
        </div>
        <div className="mt-8">
          <textarea
            name="content"
            placeholder="Type your post content here..."
            className="w-full outline-none h-96 px-12 p-8 rounded-lg placeholder-black placeholder-opacity-70 tracking-wider space-x-11"
          />
        </div>

        <div className="relative">
          <button className="bg-sky-700 hover:bg-blue-600 transition duration-300 text-white font-medium mt-4 p-2 px-4 rounded-lg">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center px-3 py-[16px] bg-zinc-100">
        <Link to="/">
          <h3 className="font-extrabold text-3xl ml-2 opacity-80 marck-font">
            VoxMonia
          </h3>
        </Link>
      </div>
      <h1 className="h-[1px] bg-black opacity-5"></h1>
    </div>
  );
};

const Prompt = () => {
  return (
    <div
      role="alert"
      className="rounded-xl border border-gray-100 bg-white p-4 flex flex-wrap w-96 absolute right-7 top-20"
    >
      <div className="flex items-start gap-4">
        <span className="text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>

        <div className="flex-1">
          <strong className="block font-medium text-gray-900">
            Post published
          </strong>

          <p className="mt-1 text-sm text-gray-700">
            Your post have been published.
          </p>
        </div>

        <button
          onClick={(e) => setIsClicked(!isClicked)}
          className="text-gray-500 transition hover:text-gray-600"
        >
          <span className="sr-only">Dismiss popup</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NewPost;
