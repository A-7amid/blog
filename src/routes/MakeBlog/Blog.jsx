import React, { createContext, useEffect, useRef, useState } from "react";
import Navbar from "../../Components/Navbar";

const Blog = () => {
  const titleRef = useRef();
  const typeRef = useRef();

  const [blog, setBlog] = useState({
    title: "Give your feedback on my updated Portfolio 👋",
    type: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  });
  const makeBlog = () => {
    setBlog({
      title: titleRef.current.value,
      type: typeRef.current.value,
    });
  };

  // console.log(blog);

  return (
    <div className="">
      <Navbar />
      <div className="w-7/12 mx-auto">
        <div className="flex mt-4">
          <input
            type="text"
            placeholder="Title"
            className="w-full font-bold text-4xl outline-none"
            ref={titleRef}
          />
        </div>
        <div className="mt-4">
          <textarea ref={typeRef} className="w-full h-44" />
        </div>
        <button
          onClick={makeBlog}
          className="bg-green-500 mt-10 p-2 px-4 rounded-lg"
        >
          Make
        </button>
      </div>
    </div>
  );
};

export default Blog;
