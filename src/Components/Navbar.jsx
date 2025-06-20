import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { usePosts } from "../context/posts.context";
import {
  AlignJustify,
  BookOpen,
  LogOut,
  NotebookPen,
  Search,
  SquarePen,
  UserPlus,
  X,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/Components/ui/sheet";
import { cn } from "../utils/clsx";

const Navbar = ({ searchable = false }) => {
  const { handleSearch } = usePosts();

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
    <nav className="bg-white/85 shadow-xs border-b border-zinc-200 w-full top-0 left-0 z-50 fixed backdrop-blur-lg">
      <div className="flex items-center container mx-auto px-4 py-3 sm:mt-0 justify-between">
        <Link to="/">
          <h3 className="flex gap-3 items-center font-extrabold text-3xl opacity-80 marck-font">
            <div className="flex items-center shadow-2xl bg-gradient-to-r from-primary to-[#00b1a8] rounded-xl px-2 py-1.5 text-md text-white">
              <BookOpen size={20} />
            </div>
            VoxOmnia
          </h3>
        </Link>

        <div
          className={cn("flex items-center gap-8", {
            "md:hidden px-3": !searchable,
          })}
        >
          <div className="flex items-center gap-8">
            <a
              href="#features"
              className="text-black/75 hover:text-blue-600 text-[17px] font-[460] transition duration-400 cursor-pointer"
            >
              Features
            </a>

            <a
              href="#articles"
              className="text-black/75 hover:text-blue-600 text-[17px] font-[460] transition duration-400 cursor-pointer"
            >
              Articles
            </a>

            <a
              href="#community"
              className="text-black/75 hover:text-blue-600 text-[17px] font-[460] transition duration-400 cursor-pointer"
            >
              Community
            </a>
          </div>

          <div
            className={cn(
              "focus:outline-blue-600 px-3 w-fit hidden justify-between items-center lg:w-96 lg:mr-24 md:flex shadow-xs hover:shadow-md border border-gray-300 duration-300 outline-slate-300 mx-2 font-normal py-[6px] rounded-md"
            )}
          >
            <div className="flex items-cetner gap-x-1 lg:grow">
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
                className="outline-hidden w-24 lg:grow placeholder-opacity-50 placeholder:font-semibold"
              />
              {isShown && (
                <X
                  size={15}
                  strokeWidth={3}
                  onClick={handleDelete}
                  className="stroke-blue-500 hover:stroke-blue-600 cursor-pointer mt-1 mr-0.5"
                />
              )}
            </div>
            <span className="hidden md:flex items-center text-nowrap opacity-60 font-bold text-sm">
              Ctrl K
            </span>
          </div>
        </div>

        <div className="hidden md:flex gap-x-3">
          <div className="gap-x-3 hidden sm:flex">
            <Link
              to="/login"
              className="rounded-lg text-nowrap flex justify-center items-center py-2 px-3 gap-x-3 hover:bg-slate-100 text-[#232A37] hover:text-black duration-200 transition-all"
            >
              <LogOut size={15} strokeWidth={2} />
              <span className="text-sm">Log In</span>
            </Link>
            <Link
              to="/signup"
              className={cn(
                "border-2 text-nowrap gap-x-3 border-opacity-15 text-white bg-black rounded-lg flex justify-center items-center px-3 hover:bg-gray-900 duration-200 transition-all",
                { "md:hidden px-3": searchable }
              )}
            >
              <UserPlus size={16} strokeWidth={3} />
              <span className="text-sm">Sign Up</span>
            </Link>
          </div>
          <MakePost />
        </div>

        {/* Phone Design */}
        <div className="flex w-full justify-end gap-x-5 md:hidden">
          <Sheet>
            <SheetTrigger>
              <button className="flex items-center font-bold justify-center px-2 p-1.5 rounded-sm hover:bg-zinc-200 transition-all duration-200">
                <AlignJustify size={17} strokeWidth={3} />
              </button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="font-extrabold text-3xl items-start flex opacity-80 marck-font">
                  VoxOmnia
                </SheetTitle>
                <SheetDescription>
                  <div className="focus:outline-blue-600 bg-gray-50 mt-2 px-3 justify-between sm:items-center w-full flex shadow-xs hover:shadow-md border border-gray-200 duration-300 outline-slate-300 font-normal py-2 rounded-md">
                    <div className="flex items-cetner gap-x-1 grow">
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
                        className="outline-hidden placeholder-black bg-gray-50 grow placeholder-opacity-40 placeholder:font-bold"
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

                  <div className="h-px bg-zinc-200 w-full my-4"></div>

                  <div className="gap-x-3 flex text-black flex-col gap-2">
                    <MakePost />
                    <Link className="rounded-lg border border-gray-200 flex justify-center items-center py-2 px-3 gap-x-3 hover:bg-neutral-100 duration-200 transition-all">
                      <LogOut size={14} strokeWidth={3} />
                      <span className="text-sm">Log In</span>
                    </Link>
                    <Link className="border-2 gap-x-3 border-opacity-15 py-2 text-white bg-black rounded-lg flex justify-center items-center px-3 hover:bg-neutral-900 duration-200 transition-all">
                      <UserPlus size={16} strokeWidth={3} />
                      <span className="text-sm">Sign Up</span>
                    </Link>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        {/* End Phone Design */}
      </div>
    </nav>
  );
};

const MakePost = ({ className }) => {
  return (
    <Link
      to="/create-post"
      // className={cn(
      //   "flex gap-3 bg-black/85 hover:bg-black/75 text-white text-nowrap justify-center items-center w-full lg:hover:underline font-medium px-4 py-2 duration-200 transition-all hover:no-underline text-sm rounded-md lg:hover:text-white lg:text-black border-black border-2 lg:bg-transparent lg:hover:bg-black ",
      //   className
      // )}
      className="flex items-center shadow-2xl cursor-pointer hover:from-[#1b47b7] hover:to-[#05968f] gap-3 bg-gradient-to-r from-primary to-[#00b1a8] rounded-md px-4 py-2 text-sm text-white"
    >
      <SquarePen size={16} />
      Start Writing
    </Link>
  );
};

export default Navbar;
