import React from "react";
import { Link } from "react-router-dom";
const MakePost = () => {
  return (
    <div className="p-3 font-medium px-4 rounded-lg bg-gray-400 hover:opacity-85 duration-300 transition">
      <Link to="/make-post">
        <button>Make Blog</button>
      </Link>
    </div>
  );
};

export default MakePost;
