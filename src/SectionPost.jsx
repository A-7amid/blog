import React from "react";
import { Link } from "react-router-dom";
const SectionPost = () => {
  return (
    <Link to="/new">
      <button className="p-3 hover:underline font-medium px-4 rounded-lg hover:text-white text-blue-00 border-blue-00 border-2 bg-transparent hover:bg-blue-00 ">
        Create Post
      </button>
    </Link>
  );
};

export default SectionPost;
