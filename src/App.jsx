import React from "react";
import Navbar from "./Components/Navbar";
import Blogs from "./Components/Blogs";
import MakeBlog from "./MakeBlog";

const App = () => {
  return (
    <div className="bg-slate-100 flex flex-col">
      <Navbar />
      <Blogs />
      <div className="absolute right-32 top-44">
        <MakeBlog />
      </div>
    </div>
  );
};

export default App;
