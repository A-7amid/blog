import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { posts } from "../data";
import { useLocalStorage } from "../useLocalStorage";
const Blog = () => {
  const [post, setPost] = useState({
    title: "Productivity",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, soluta.",
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { setItem } = useLocalStorage("post");

  const makePost = () => {
    setPost({
      title: title,
      content: content,
    });

    console.log(post);
  };

  useEffect(() => {
    posts.push(post);
  }, [post]);
  console.log(posts);

  return (
    <div className="">
      <Navbar />
      <div className="w-7/12 mx-auto">
        <div className="flex mt-4">
          <input
            type="text"
            placeholder="Title"
            className="w-full font-bold text-4xl outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mt-8">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Type your post ..."
            className="w-full h-44 outline-none"
          />
        </div>

        <button
          onClick={() => {
            setItem(post);
            makePost();
          }}
          className="bg-green-500 hover:opacity-85 duration-300 transition  font-medium mt-10 p-2 px-4 rounded-lg"
        >
          Make
        </button>
      </div>
    </div>
  );
};

export default Blog;
