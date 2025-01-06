import React from "react";
import Blog from "./routes/MakeBlog/Blog";
import { Link } from "react-router-dom";

const MakeBlog = () => {
  return (
    <div className="p-5 bg-blue-800">
      <Link to="/make-blog">
        <button>Make Blog</button>
      </Link>
    </div>
  );
};

export default MakeBlog;
