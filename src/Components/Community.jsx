import { SquarePen } from "lucide-react";

export const Community = () => {
  return (
    <section
      id="community"
      className="bg-gradient-to-r from-[#2562EB] via-[#4E47E5] to-[#14B7A6] text-white w-full flex justify-center items-center p-20"
    >
      <div className="w-full flex flex-col items-center gap-4">
        <h2 className="text-4xl font-bold">Ready to Share Your Story?</h2>

        <p className="text-xl font-[400] text-white/80 mb-4">
          Join thousands of writers who are already making an impact
        </p>

        <div className="flex items-center gap-3">
          <button className="bg-white items-center  cursor-pointer px-10 font-[470] py-2 text-lg text-black flex gap-5 rounded-md">
            Start Writing Today
            <SquarePen size={16} />
          </button>
          <button className="bg-transparent cursor-pointer border border-white px-8 font-[470] py-2 text-lg text-black flex justify-center items-center rounded-md hover:bg-white/10 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};
