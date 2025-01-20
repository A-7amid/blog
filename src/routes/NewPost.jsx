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
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const NewPost = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [files, setFiles] = useState([]);

  const inputRef = useRef();

  const { createPost } = usePosts();

  const navigate = useNavigate();

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);
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
  console.log(acceptedFiles);
  console.log(files);

  const baseStyle = {
    borderWidth: 2.3,
    // borderColor: "#a1a1aa",
    borderRadius: 6,
    width: "full",
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
    <div className="roboto-mono flex flex-col min-h-screen max-h-full">
      <Navbar />

      <form
        onSubmit={handleFormSubmit}
        className="flex-grow container mx-auto max-w-2xl px-4 py-8 flex flex-col mb-12"
      >
        <h3 className="font-bold text-3xl">Create a New Post</h3>

        <label htmlFor="" className="flex flex-col pt-5 gap-y-1">
          <span className="text-sm font-medium">Title</span>
          <input
            name="title"
            ref={inputRef}
            type="text"
            required
            className="border-2 px-3 rounded-md py-2 focus:outline-offset-4 focus:outline-gray-700 focus:outline-1"
          />
        </label>

        <label htmlFor="" className="flex flex-col pt-5 gap-y-1">
          <span className="text-sm font-medium">Content</span>
          <textarea
            type="text"
            required
            name="content"
            className="min-h-[200px] max-h-[800px] border-2 px-3 rounded-md py-2 focus:outline-offset-4 focus:outline-gray-700 focus:outline-1"
          />
        </label>

        <div className="flex flex-col">
          <label htmlFor="" className="mt-5 font-medium text-xl">
            Category
          </label>

          <select className="border-2 bg-transparent px-2 rounded-md py-2 text-lg">
            <option value="" hidden required>
              Select a Category
            </option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="github">GitHub</option>
            <option value="react js">React JS</option>
          </select>
        </div>

        <div className="flex flex-col mt-5">
          <label htmlFor="" className="font-medium text-xl">
            Cover Image
          </label>

          <div
            {...getRootProps({ style })}
            className="border-black border-opacity-10"
          >
            <input {...getInputProps()} className="h-full w-full" />
            <p className="rounded-md text-lg font-medium flex justify-center items-center pl-4 py-2">
              Choose Image{" "}
              <span className="font-normal ml-2" required>
                {"No image chosen"}
              </span>
            </p>
          </div>
        </div>

        <button
          type="submit"
          to="/"
          className="bg-slate-900 hover:bg-slate-800 duration-200 text-white rounded-md text-lg py-2 flex justify-center items-center font-medium mt-5 -mb-12"
        >
          Publish Post
        </button>
      </form>

      <Footer />
    </div>
  );
};

export default NewPost;
