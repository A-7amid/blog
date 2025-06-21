import { Award, Users, Zap } from "lucide-react";
import { cn } from "../utils/clsx";

export const Features = () => {
  return (
    <section id="features" className="flex flex-col items-center mt-16">
      <div className="flex flex-col mb-7">
        <h3 className="text-4xl font-bold text-center roboto-mono mt-6 mb-4">
          Why Choose VoxOmnia?
        </h3>

        <span className="text-xl font-[400] text-gray-500 text-center mb-10">
          Everything you need to share your expertise with the world
        </span>
      </div>

      <div className="flex w-[84%] items-center justify-center gap-5 mb-10">
        <Card
          color="zap"
          className="hover:bg-primary/5"
          icon={<Zap size={34} color="white" />}
          header="Lightning Fast"
          description="Optimized for speed with instant loading and seamless navigation"
        />

        <Card
          color="users"
          className="hover:bg-[#13B8AB]/8"
          icon={<Users size={34} color="white" />}
          header="Global Community"
          description="Connect with developers and creators from around the world"
        />
        <Card
          color="award"
          className="hover:bg-[#F97118]/8"
          icon={<Award size={34} color="white" />}
          header="Recognition"
          description="Get recognized for your contributions with our reward system"
        />
      </div>
    </section>
  );
};

const Card = ({ color, icon, header, description, className }) => {
  const colors = {
    zap: "from-primary to-[#00b1a8]",
    users: "from-[#13B8AB] to-[#06B6D1]",
    award: "from-[#F97118] to-[#F04940]",
  };

  return (
    <div
      className={cn(
        `flex flex-col h-full select-none hover:[${colors[color]}] transition items-center justify-center duration-400 rounded-lg group p-6`,
        className
      )}
    >
      <div
        className={cn(
          "flex items-center shadow-2xl transa w-fit justify-center group-hover:scale-107 transition duration-100 py-4 px-4 bg-gradient-to-r rounded-2xl",
          colors[color]
        )}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold text-center roboto-mono mt-4 mb-2">
        {header}
      </h3>

      <span className="text-md text-gray-500 text-center ">{description}</span>
    </div>
  );
};
