import { ArrowRight, Heart, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
const names = [
  "Jane Smith",
  "Alice Johnson",
  "Bob Brown",
  "Charlie Davis",
  "Emily Evans",
  "Frank Green",
  "Grace Harris",
  "Hannah White",
  "Ian Black",
  "Jack Wilson",
  "Karen Thompson",
  "Liam Martinez",
  "Mia Robinson",
  "Noah Clark",
  "Olivia Lewis",
  "Paul Walker",
  "Quinn Hall",
];

const Post = ({
  title,
  img,
  date,
  content,
  likes,
  comments,
  userName,
  category,
}) => {
  return (
    <div className="flex hover:shadow-2xl shadow-md group hover:-translate-y-2 duration-400 border border-opacity-10 rounded-md sm:-space-x-20 h-[450px]">
      <div className="flex flex-col h-full w-full gap-3">
        <div className="flex sm:w-full relative overflow-hidden">
          <span className="border border-white/50 hover:border-white/30 bg-white/10 hover:bg-black/70 transition duration-200 font-bold text-white px-3 py-0.5 text-xs rounded-4xl absolute top-3 left-2">
            🔥 Trending
          </span>
          <img
            src={img}
            alt="article image"
            className="
       flex grow rounded-t-md"
          />
        </div>
        <div className="flex flex-col px-7 grow mt-4">
          <div className="flex opacity-80 mb-3 text-black bg-gray-100 w-fit rounded-2xl text-xs font-semibold px-3.5 py-1">
            <span className="flex font-medium hover:underline capitalize">
              {category}
            </span>
            <span className="flex font-medium hover:underline">
              by {userName || names[Math.round(Math.random() * names.length)]}
            </span>
          </div>
          {/* text-2xl font-bold w-fit mb-4 hover:text-blue-700 duration-200 cursor-pointer */}
          <Link
            to={`/post/${title}`}
            className="font-bold text-lg text-black opacity-85 mb-3 group-hover:text-blue-800 duration-200 cursor-pointer w-fit"
          >
            {title}
          </Link>

          <p className="text-sm mb-5 text-zinc-600 flex text-wrap">{content}</p>

          <div className="h-px bg-gray-100 w-full"></div>

          <div className="flex items-center gap-x-2.5 h-full">
            <div className="flex items-center gap-1 hover:text-red-600 transition duration-200">
              <Heart strokeWidth={2.5} size={16} />
              <span className="text-xs">{likes || "120"}</span>
            </div>
            <div className="flex items-center gap-1 hover:text-black transition duration-200">
              <MessageCircle size={16} />
              <span className="text-xs">{comments || "13"}</span>
            </div>
            <Link
              to={`/post/${title}`}
              className="cursor-pointer text-blue-600 flex gap-2 items-center px-3 py-1.5 hover:bg-gray-50 duration-75 ease-out font-semibold"
            >
              Read More <ArrowRight size={17} />
            </Link>
          </div>

          {/* <span className="text-sm text-black cursor-text">{date}</span> */}
        </div>
      </div>
    </div>
  );
};

export default Post;
