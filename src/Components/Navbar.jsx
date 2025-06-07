import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { usePosts } from "../context/provider.context";
import { LogOut, UserPlus } from "lucide-react";

const Navbar = () => {
  const { posts, setPosts } = usePosts();

  const [searchPost, setSearchPost] = useState("");

  const inputSearchRef = useRef();

  const handleInputSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchPost(searchTerm);

    const filter = posts.filter((post) => {
      post.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setPosts(filter);
  };

  useEffect(() => {
    addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.key == "k") {
        e.preventDefault();
        inputSearchRef.current.focus();
      }
    });
  });

  const handleShow = () => {};

  return (
    <nav className="border-b">
      <div className="flex items-center container mx-auto px-4 py-3 sm:mt-0 justify-between">
        <Link to="/">
          <h3 className="font-extrabold text-3xl opacity-80 marck-font">
            VoxOmnia
          </h3>
        </Link>
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
            value={searchPost}
            onChange={handleInputSearch}
            type="text"
            placeholder="Search"
            className="focus:outline-blue-600 sm:items-center sm:-mr-24 md:w-96 w-44 shadow-sm hover:shadow-md border border-gray-300 duration-300 outline-slate-300 mx-2 font-normal px-3 py-[6px] rounded-md pl-10 placeholder-black placeholder-opacity-50 placeholder:font-semibold"
          />
          <span className="hidden md:top-[10px] md:right-5 md:translate-x-24 md:absolute md:block opacity-60 font-bold text-sm">
            Ctrl K
          </span>
        </label>

        {/* Phone Design */}
        <div className="flex w-full justify-end gap-x-5 sm:hidden">
          <button
            onClick={handleShow}
            className="flex items-center font-bold text-[160%] justify-center px-4 p-2 rounded-lg hover:bg-zinc-100 duration-100"
          >
            ≡
          </button>
        </div>

        <div className="w-[80%] hidden">
          <MakePost />

          <input
            ref={inputSearchRef}
            value={searchPost}
            onChange={handleInputSearch}
            type="text"
            placeholder="Search"
            className="focus:outline-blue-600 md:w-96 w-44 shadow-sm hover:shadow-md border border-gray-300 duration-300 outline-slate-300 mx-2 font-normal px-3 py-[6px] rounded-md pl-10 placeholder-black placeholder-opacity-50 placeholder:font-semibold"
          />
        </div>
        {/* End Phone Design */}
        {/* items-center sm:translate-x-16 lg:translate-x-[220px] sm:block hidden */}
        <div className="hidden sm:flex gap-x-3">
          <div>
            <MakePost />
          </div>
          {/* gap-x-4 justify-end lg:translate-x-[230px] lg:-mr-14 hidden sm:flex */}
          <div className="gap-x-3 hidden sm:flex">
            <Link className="rounded-lg flex justify-center items-center px-3 gap-x-3 hover:bg-slate-100 duration-75">
              <LogOut size={15} strokeWidth={3} />
              <span className="text-sm">Log In</span>
            </Link>
            <Link className="border-2 gap-x-3 border-opacity-15 text-white bg-black rounded-lg flex justify-center items-center px-3 hover:bg-gray-900 duration-75">
              <UserPlus size={16} strokeWidth={3} />
              <span className="text-sm">Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const MakePost = () => {
  const svgRef = useRef();

  const hi = () => {
    svgRef.current.style.stroke = "white";
  };

  const hi2 = () => {
    svgRef.current.style.stroke = "black";
  };
  return (
    <Link to="/new" className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-square-pen mr-2 size-[14px] left-4 top-3 duration-200 transition-all absolute select-none stroke-black"
        ref={svgRef}
      >
        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
        <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
      </svg>

      <button
        onMouseEnter={hi}
        onMouseLeave={hi2}
        className="flex lg:hover:underline font-medium px-4 py-2 pl-11 duration-200 transition-all hover:no-underline text-sm mr-2 rounded-md lg:hover:text-white lg:text-black border-black border-2 lg:bg-transparent lg:hover:bg-black "
      >
        Create Post
      </button>
    </Link>
  );
};

export default Navbar;
