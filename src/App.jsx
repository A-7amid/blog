import Posts from "./Components/Posts";
import Navbar from "./Components/navbar";

const App = () => {
  return (
    <div className="bg-slate-100 h-full flex flex-col">
      <Navbar />
      <Posts />
    </div>
  );
};

export default App;
