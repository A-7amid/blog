import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { usePosts } from "../context/provider.context";
import { Link, useHref, useNavigate } from "react-router-dom";
import Dropzone, { useDropzone } from "react-dropzone";

const NewPost = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [files, setFiles] = useState([]);

  const inputRef = useRef();

  const { createPost } = usePosts();

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);
  // console.log(files);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    acceptedFiles,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png, image/jpg",
  });

  // border-[2px] border-zinc-400 rounded-md hover:shadow-md h-64 flex bg-white cursor-default font-semibold select-none

  const baseStyle = {
    borderWidth: 2.3,
    // borderColor: "#a1a1aa",
    borderRadius: 6,
    height: 55,
    width: 200,
    display: "flex",
    backgroundColor: "white",
    fontWeight: 600,
    userSelect: "none",
    cursor: "pointer",
  };

  const activeStyle = {
    borderColor: "#2196f3",
  };

  const acceptedStyle = {
    borderColor: "#00e676",
  };

  const rejectStyle = {
    borderColor: "#ff1744",
  };

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragAccept ? acceptedStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
      ...(isDragActive ? activeStyle : {}),
    }),
    [isDragAccept, isDragReject, isDragActive]
  );

  const handleFormSubmit = (e) => {
    setIsClicked(true);
    e.preventDefault();
    createPost({
      title: e.target.title.value,
      content: e.target.content.value,
      img: files[0].preview,
    });
    e.target.title.value = "";
    e.target.content.value = "";
    navigate("/");
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="w-full bg-zinc-100 min-h-screen max-h-full">
      <Navbar />
      <form
        onSubmit={handleFormSubmit}
        className=" w-[92%]
     sm:w-[80%]
     md:w-7/12 mx-auto"
      >
        <div className="flex mt-4 mb-8">
          <input
            ref={inputRef}
            type="text"
            placeholder="New Post Title Here..."
            className="w-full font-semibold md:text-3xl sm:text-2xl outline-none px-8 p-6 sm:px-12 sm:p-8 rounded-lg placeholder-black placeholder-opacity-60"
            name="title"
          />
        </div>
        <div>
          <textarea
            name="content"
            placeholder="Type your post content here..."
            className="w-full outline-none h-60 px-8 p-6 mb-8 sm:px-12 sm:p-8 rounded-lg placeholder-black placeholder-opacity-70 tracking-wider space-x-11"
          />
        </div>

        <div
          {...getRootProps({ style })}
          className="border-black border-opacity-20 mb-10"
        >
          <input {...getInputProps()} className="h-full w-full" />
          {isDragActive ? (
            <p className="flex justify-center items-center w-full h-full">
              Drop the files here ...
            </p>
          ) : (
            <p className="flex justify-center items-center w-full h-full">
              Add a cover image
            </p>
          )}
        </div>

        <div className="relative">
          <button
            type="submit"
            className="bg-sky-700 hover:bg-blue-600 transition duration-300 text-white font-medium p-2 px-4 rounded-lg"
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center px-3 py-[16px] bg-zinc-100">
        <Link to="/">
          <h3 className="font-extrabold text-3xl ml-2 sm:ml-16 md:ml-2 opacity-80 marck-font">
            VoxOmonia
          </h3>
        </Link>
      </div>
      <h1 className="h-[1px] bg-black opacity-5"></h1>
    </div>
  );
};

export default NewPost;
