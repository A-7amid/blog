import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { usePosts } from "../context/posts.context";
import { LogOut, Search, UserPlus, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const { searchPost, handleSearch } = usePosts();

  const [isShown, setIsShown] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const searchInputRef = useRef();

  useEffect(() => {
    addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.key == "k") {
        e.preventDefault();
        searchInputRef.current.focus();
      }
    });
  });

  useEffect(() => {
    if (inputValue !== "") {
      setIsShown(true);
      console.log(inputValue);
    } else {
      setIsShown(false);
    }
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    searchInputRef.current.value = e.target.value;
    handleSearch(searchInputRef.current.value);
  };

  const handleDelete = () => {
    searchInputRef.current.value = "";
    setIsShown(false);
    setInputValue("");
    handleSearch(searchInputRef.current.value);
  };

  return (
    <nav className="border-b">
      <div className="flex items-center container mx-auto px-4 py-3 sm:mt-0 justify-between">
        <Link to="/">
          <h3 className="font-extrabold text-3xl opacity-80 marck-font">
            VoxOmnia
          </h3>
        </Link>
        <label className="relative select-none cursor-text sm:block hidden">
          <div className="focus:outline-blue-600 px-3 justify-between sm:items-center sm:-mr-24 md:w-96 w-44 flex shadow-sm hover:shadow-md border border-gray-300 duration-300 outline-slate-300 mx-2 font-normal py-[6px] rounded-md">
            <div className="flex items-cetner gap-x-1 flex-grow">
              <Search
                size={16}
                strokeWidth={2.7}
                className="opacity-60 mt-[3px] mr-2"
              />
              <input
                value={inputValue}
                ref={searchInputRef}
                onChange={handleInputChange}
                type="text"
                placeholder="Search"
                className="outline-none placeholder-black flex-grow placeholder-opacity-50 placeholder:font-semibold"
              />
              {isShown && (
                <X
                  size={15}
                  strokeWidth={3}
                  onClick={handleDelete}
                  className="opacity-60 hover:opacity-100 cursor-pointer mt-1 mr-0.5"
                />
              )}
            </div>
            <span className="hidden md:flex opacity-60 font-bold text-sm">
              Ctrl K
            </span>
          </div>
        </label>

        {/* Phone Design */}
        {/* <div className="flex w-full justify-end gap-x-5 sm:hidden"> */}
          <Sheet>
            <SheetTrigger>
              <button className="flex items-center font-bold text-[160%] justify-center px-4 p-2 rounded-lg hover:bg-zinc-100 duration-100">
                ≡
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        {/* </div> */}

        <div className="w-[80%] hidden">
          <MakePost />

          <input
            ref={searchInputRef}
            value={searchPost}
            onChange={handleSearch}
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
