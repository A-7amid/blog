import { Heart, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
var names = [
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

const Post = ({ title, img, date, content, likes, comments, userName }) => {
  return (
    <div className="flex hover:shadow-md shadow-sm duration-100 border-[1px] border-black border-opacity-10 rounded-md sm:-space-x-20">
      <div className="flex flex-col">
        <div className="flex sm:w-full">
          <img
            src={img}
            alt="post image"
            className="
       flex flex-grow rounded-t-md"
          />
        </div>
        <div className="px-4 pt-2 flex flex-col cursor-default text-zinc-600">
          <div className="flex gap-x-1 opacity-80 mb-2.5 mt-2.5 text-black bg-gray-200 w-fit rounded-2xl text-xs font-semibold px-3.5 py-1">
            <span>In</span>
            <span className="flex font-medium hover:underline">{`React JS`}</span>
            <span>by</span>
            <span className="flex font-medium hover:underline">
              {userName || names[Math.round(Math.random() * names.length)]}
            </span>
          </div>
          {/* text-2xl font-bold w-fit mb-4 hover:text-blue-700 duration-200 cursor-pointer */}
          <Link
            to={`/post/${title}`}
            className="font-bold text-lg text-black opacity-85 mb-3 hover:text-blue-800 duration-200 cursor-pointer"
          >
            {title}
          </Link>

          <p className="text-sm mb-5 cursor-text">{content}</p>

          <div className="flex items-center gap-x-2.5">
            <div className="flex items-center gap-1 hover:text-red-600 cursor-pointer transition duration-200">
              <Heart strokeWidth={2.5} size={16} />
              <span className="text-xs">{likes || "120"}</span>
            </div>
            <div className="flex items-center gap-1 hover:text-black cursor-pointer transition duration-200">
              <MessageCircle size={16} />
              <span className="text-xs">{comments || "13"}</span>
            </div>
            <div className="flex justify-end w-full">
              <Link
                to={`/post/${title}`}
                className="cursor-pointer text-black text-xs px-3 py-1.5 hover:bg-gray-100 rounded-sm duration-75 ease-out font-semibold"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>

        <div className="h-px bg-gray-200 w-full mt-3"></div>

        <span className="text-sm text-black px-7 py-3.5 cursor-text">
          {date}
        </span>
      </div>
    </div>
  );
};

export default Post;
