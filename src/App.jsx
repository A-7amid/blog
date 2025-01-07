import React, { createContext, useContext, useState } from "react";
import Navbar from "./Components/Navbar";
import Blogs from "./Components/Blogs";
import MakePost from "./MakePost";

const TitleContext = React.createContext();

const App = () => {
  const [title, setTitle] = useState();
  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      <div className="bg-slate-100 h-screen flex flex-col">
        <Navbar />
        <Blogs />
        <div className="absolute right-32 top-44">
          <MakePost />
        </div>
      </div>
    </TitleContext.Provider>
  );
};

export default App;
