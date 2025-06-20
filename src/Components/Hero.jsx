import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";
import numeral from "numeral";
import { Link } from "react-router-dom";

const data = [
  {
    title: "Active Writers",
    number: 20000,
  },
  {
    title: "Articles Published",
    number: 1100000,
  },
  {
    title: "Monthly Readers",
    number: 7200000,
  },
  {
    title: "Countries",
    number: 60,
  },
];

export const Hero = () => {
  AOS.init({
    offset: 200,
    duration: 1000,
    // easing: "ease-in-sine",
  });
  return (
    <header
      data-aos="fade-up"
      className="flex flex-col w-full  items-center justify-center pt-24 mx-auto text-center pb-52"
    >
      {/* bg-gradient-to-b from-slate-100 to-slate-200 */}
      <span className="rounded-3xl text-primary text-sm bg-[#DBEAFE] py-2 px-3.5 hover:bg-[#F3F5F6]">
        ✨ Join 50K+ Writers Worldwide
      </span>
      <h1 className="text-7xl mt-4 font-bold flex flex-col tracking-wider text-center">
        Share Your Voice,
        <span className="bg-gradient-to-r from-primary to-primary2 inline-block text-transparent bg-clip-text">
          Shape the Future
        </span>
      </h1>

      <p className="text-center text-gray-500 text-2xl mt-4 mx-auto max-w-3xl text-pretty">
        The premier platform where developers, creators, and innovators share
        knowledge, build communities, and inspire the next generation of digital
        pioneers.
      </p>

      <div className="flex gap-4 mt-8">
        <Link
          to="/create-post"
          className="flex items-center shadow-2xl cursor-pointer hover:from-[#1b47b7] hover:to-[#05968f] gap-4 bg-gradient-to-r from-primary to-[#00b1a8] rounded-md px-8 py-2 text-lg text-white "
        >
          Start Your Journy <ArrowRight size={17} />
        </Link>

        <button className="border bg-white cursor-pointer rounded-md px-8 py-2 text-lg font-[500]">
          Explore Articles
        </button>
      </div>

      <div className="flex justify-between items-center mt-15 w-[1070px]">
        {data.map((card) => (
          <div key={card.title}>
            <h4 className="text-3xl font-bold uppercase">
              {numeral(card.number).format("0a")}+
            </h4>
            <span className="text-gray-500">{card.title}</span>
          </div>
        ))}
      </div>
    </header>
  );
};
