import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center px-3">
        <Link to="/">
          <h3 className="font-medium text-2xl">VoxMonia</h3>
        </Link>

        <div className="flex justify-end w-full">
          <label className="relative flex justify-center">
            <svg
              className="size-5 absolute opacity-60 left-5 top-7"
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
              className="focus:outline-blue-600 m-2 font-medium px-3 py-4 rounded-md pl-10"
            />
          </label>
        </div>
      </div>
      <h1 className="h-[1px] bg-black opacity-10"></h1>
    </>
  );
};

export default Navbar;
