import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div>
      <div className="flex items-center px-3 py-2">
        <Link to="/">
          <h3 className="font-extrabold text-3xl ml-2 opacity-80 marck-font">
            VoxMonia
          </h3>
        </Link>
        <div className="flex justify-end w-full items-center">
          <MakePost />
        </div>
        <div className="flex justify-end ">
          <label className="relative flex justify-center">
            <svg
              className="size-5 absolute left-5 top-4 opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 30 30"
            >
              <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="focus:outline-blue-600 shadow-sm hover:shadow-md border border-gray-300 duration-300 outline-slate-300 m-2 font-medium px-3 py-1 rounded-md pl-10 placeholder-black placeholder-opacity-50"
            />
          </label>
        </div>
      </div>
      <h1 className="h-[1px] bg-black opacity-5"></h1>
    </div>
  );
};

const MakePost = () => {
  return (
    <Link to="/new">
      <button className="flex hover:underline font-medium px-4 py-1 pb-[6px] rounded-md hover:text-white text-blue-700 border-blue-700 border-2 bg-transparent hover:bg-blue-700 ">
        Create Post
      </button>
    </Link>
  );
};

export default navbar;
