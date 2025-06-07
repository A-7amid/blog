import Navbar from "../Components/Navbar";

const Search = () => {
  return (
    <div className="w-full">
      <Navbar />

      <div className="flex flex-col mx-5 gap-y-10 mt-10">
        <input type="text" placeholder="Search" />

        <h3 className="text-3xl font-bold opacity-80">Recent searches</h3>

        <p>You have no recent searches</p>
      </div>
    </div>
  );
};

export default Search;
