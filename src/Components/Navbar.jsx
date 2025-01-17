import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { usePosts } from "../context/provider.context";

const Navbar = () => {
  const { posts, setPosts } = usePosts();

  const inputSearchRef = useRef();

  const handleSearch = (e) => {
    setPosts(
      posts.filter((post) =>
        post.title.toLowerCase().startsWith(e.target.value)
      )
    );
  };

  addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key == "k") {
      e.preventDefault();
      inputSearchRef.current.focus();
    }
  });

  return (
    <div>
      <div className="flex items-center w-full px-3 py-2 mt-3 sm:mt-0">
        <Link to="/">
          <h3 className="font-extrabold lg:text-3xl lg:ml-2 text-3xl opacity-80 marck-font">
            VoxOmonia
          </h3>
        </Link>
        <div className="flex w-full relative sm:justify-center sm:gap-x-16 md:gap-x-24 lg:gap-0 justify-around">
          <label className="relative select-none cursor-text sm:block hidden">
            <svg
              className="size-[18px] absolute md:top-[10px] md:left-5 opacity-60 top-2 left-5 sm:left-5 stroke-black stroke-1"
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
              ref={inputSearchRef}
              onKeyUp={(e) => handleSearch(e)}
              type="text"
              placeholder="Search"
              className="focus:outline-blue-600 md:w-full w-44 shadow-sm hover:shadow-md border border-gray-300 duration-300 outline-slate-300 mx-2 font-normal px-3 py-[6px] rounded-md pl-10 placeholder-black placeholder-opacity-50 placeholder:font-semibold"
            />
            <span className="hidden md:top-[10px] md:right-1 md:absolute md:block opacity-60 font-bold text-sm">
              Ctrl K
            </span>
          </label>

          {/* Phone Design */}
          <div className="flex w-full justify-end gap-x-5 sm:hidden">
            <Link to="/search">
              <svg
                className="size-7 opacity-80 hover:opacity-100"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 30 30"
              >
                <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
              </svg>
            </Link>

            <Link to={"/new"}>
              <img
                src="/imgs/contract.png"
                alt="write post"
                className="size-7 opacity-80 hover:opacity-100"
              />
            </Link>
          </div>

          <div className="items-center md:translate-y-0 lg:translate-x-80 lg:-mr-14 sm:block hidden">
            <MakePost />
          </div>
        </div>
      </div>
      <h1 className="h-[1px] bg-black opacity-5"></h1>
    </div>
  );
};

const MakePost = () => {
  return (
    <Link to="/new">
      <button className="flex lg:hover:underline font-medium px-4 py-2 pb-[10px] hover:no-underline text-sm mr-2 rounded-md lg:hover:text-white lg:text-blue-700 lg:border-blue-700 lg:border-2 lg:bg-transparent lg:hover:bg-blue-700 bg-blue-700 text-white">
        Create Post
      </button>
    </Link>
  );
};

export default Navbar;
