import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { usePosts } from "../context/posts.context";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";

const categories = [
  { value: "programming-fundamentals", label: "Programming Fundamentals" },
  {
    value: "data-structures-algorithms",
    label: "Data Structures & Algorithms",
  },
  { value: "design-patterns", label: "Design Patterns" },
  { value: "python", label: "Python" },
  { value: "javascript", label: "JavaScript" },
  { value: "java", label: "Java" },
  { value: "cpp", label: "C++" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
  { value: "ruby", label: "Ruby" },
  { value: "php", label: "PHP" },
  { value: "csharp", label: "C#" },
  { value: "html-css", label: "HTML / CSS" },
  { value: "typescript", label: "TypeScript" },
  { value: "reactjs", label: "React.js" },
  { value: "frontend-development", label: "Frontend Development" },
  { value: "backend-development", label: "Backend Development" },
  { value: "fullstack-development", label: "Full Stack Development" },
];

const baseStyle = {
  borderWidth: 2.3,
  borderRadius: 6,
  width: "full",
  display: "flex",
  backgroundColor: "white",
  fontWeight: 600,
  userSelect: "none",
  cursor: "pointer",
};

const NewPost = () => {
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

  const [files, setFiles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const inputRef = useRef();

  const navigate = useNavigate();

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragAccept ? { borderColor: "#00e676" } : {}),
      ...(isDragReject ? { borderColor: "#ff1744" } : {}),
      ...(isDragActive ? { borderColor: "#2196f3" } : {}),
    }),
    [isDragAccept, isDragReject, isDragActive]
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();
    createPost({
      title: e.target.title.value,
      content: e.target.content.value,
      img: files[0].preview,
      category: selectedCategory,
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
        className="grow container mx-auto max-w-2xl px-4 py-4 flex flex-col mb-16"
      >
        <h3 className="font-bold text-xl">Create a New Post</h3>

        <div className="flex flex-col pt-3.5 gap-y-1">
          <label htmlFor="title" className="text-md font-medium">
            Title
          </label>
          <input
            id="title"
            name="title"
            ref={inputRef}
            type="text"
            required
            className="border-2 px-3 rounded-md py-1.5 w-full focus:outline-offset-2 focus:outline-gray-500 focus:outline-2"
          />
        </div>

        <div className="flex flex-col pt-5 gap-y-1">
          <label htmlFor="content" className="text-md font-medium">
            Content
          </label>
          <textarea
            required
            id="content"
            type="text"
            name="content"
            className="h-[200px] resize-none border-2 px-3 rounded-md py-1.5 focus:outline-offset-2 focus:outline-gray-500 focus:outline-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="category" className="mt-5 font-medium text-md">
            Category
          </label>
          <Select
            value={selectedCategory}
            onValueChange={(value) => setSelectedCategory(value)}
          >
            <SelectTrigger id="category" className="w-full">
              <SelectValue placeholder="Select a Category" />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]">
              {categories.map((cat) => (
                <SelectItem key={cat.value} value={cat.value}>
                  {cat.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col mt-5">
          <label className="font-medium text-md">Cover Image</label>

          <div
            {...getRootProps({ style })}
            className="border border-opacity-10"
          >
            <input {...getInputProps()} className="h-full w-full" />
            <p className="rounded-md text-sm font-medium flex justify-center items-center pl-4 py-2">
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
          className="bg-slate-900 hover:bg-slate-800 duration-200 text-white rounded-md text-sm py-2 flex justify-center items-center font-medium mt-5 -mb-12"
        >
          Publish Post
        </button>
      </form>

      <Footer />
    </div>
  );
};

export default NewPost;
