import Posts from "./Components/Posts";
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";

const App = () => {
  return (
    <div className="bg-slate-100 min-h-screen max-h-full flex flex-col mb-44 overflow-hidden">
      <Navbar />
      <Posts />
    </div>
  );
};

export default App;
