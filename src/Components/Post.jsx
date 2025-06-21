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

const trendingLabels = [
  "🔥 Trending",
  "💡 Hot Topic",
  "⭐ Editor's Pick",
  "📖 Must Read",
  "🏅 Featured",
  "📰 Top Story",
  "🔦 Spotlight",
  "🆕 Just In",
  "📈 Popular",
  "⏰ Don't Miss",
  "🔥 On Fire",
  "🐝 Buzzing",
  "🗞️ Latest",
  "🌱 Fresh",
  "🎯 In Focus",
  "⚡ Now",
  "🚨 Breaking",
  "✨ Highlight",
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
    <div className="flex flex-col bg-white shadow-lg hover:shadow-2xl group hover:-translate-y-2 duration-300 border border-gray-200 rounded-xl overflow-hidden h-[490px] transition-all">
      <div className="relative">
        <img
          src={img}
          alt="article image"
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-500 text-white px-3 py-1 text-xs rounded-full shadow-md font-semibold tracking-wide">
          {trendingLabels[Math.floor(Math.random() * trendingLabels.length)]}
        </span>
        <span className="absolute top-4 right-4 bg-white/80 text-blue-700 px-2 py-0.5 text-xs rounded-full font-medium shadow">
          {date}
        </span>
      </div>
      <div className="flex flex-col grow px-7 py-5">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-xs font-semibold capitalize">
              {category}
            </span>
            <span className="text-xs text-gray-500">
              by{" "}
              <span className="hover:underline font-medium text-gray-700">
                {userName || names[Math.floor(Math.random() * names.length)]}
              </span>
            </span>
          </div>
          <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-800 transition-colors duration-200 cursor-pointer w-fit">
            {title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-3">{content}</p>
        </div>
        <div className="h-px bg-gray-100 w-full my-4"></div>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-1 hover:text-red-600 transition duration-200 cursor-pointer">
              <Heart strokeWidth={2.5} size={17} />
              <span className="text-xs font-medium">{likes || "120"}</span>
            </div>
            <div className="flex items-center gap-1 hover:text-blue-700 transition duration-200 cursor-pointer">
              <MessageCircle size={17} />
              <span className="text-xs font-medium">{comments || "13"}</span>
            </div>
          </div>
          <Link
            to={`/post/${title}`}
            className="cursor-pointer text-white bg-gradient-to-r from-blue-600 to-purple-500 flex gap-2 items-center px-4 py-2 rounded-full shadow hover:from-blue-700 hover:to-purple-600 transition-all font-semibold text-sm"
          >
            Read More <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
