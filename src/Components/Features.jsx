import { Zap } from "lucide-react";

export const Features = () => {
  return (
    <div>
      <div className="flex flex-col mb-7">
        <h3 className="text-4xl font-bold text-center roboto-mono mt-6 mb-4">
          Why Choose VoxOmnia?
        </h3>

        <span className="text-xl font-[400] text-gray-500 text-center mb-8">
          Everything you need to share your expertise with the world
        </span>
      </div>

      <div className="grid grid-cols-3">
        <Card />
      </div>
    </div>
  );
};

const Card = ({ header, description }) => {
  return (
    <div className="flex flex-col select-none hover:bg-[#EFF6FF] transition items-center justify-center duration-200 group">
      <div className="flex items-center shadow-2xl w-fit justify-center cursor-pointer hover:from-[#1b47b7] hover:to-[#05968f] group-hover:scale-110 transition duration-100 py-4 px-4 bg-gradient-to-r from-primary to-[#00b1a8] rounded-xl  text-md text-white">
        <Zap size={34} color="white" />
      </div>

      <h3 className="text-xl font-bold text-center roboto-mono mt-6 mb-4">
        Lightning Fast
      </h3>

      <span className="text-md text-gray-500 text-center text-pretty">
        Everything you Optimized for speed with instant loading and seamless
        navigation to share your expertise with the world
      </span>
    </div>
  );
};
