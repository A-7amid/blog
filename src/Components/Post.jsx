import { Link } from "react-router-dom";

const Post = ({
  title,
  img,
  date,
  content,
  likes,
  comments,
  category,
  userName,
}) => {
  return (
    <div className="flex hover:shadow-md duration-100 border-[1px] border-black border-opacity-10 rounded-md sm:-space-x-20">
      <div className="flex flex-col">
        <div className="flex sm:w-full">
          <img
            src={img}
            alt="post image"
            className="
       flex flex-grow rounded-t-md"
          />
        </div>
        <div className="px-4 pt-2 flex flex-col cursor-default">
          <div className="flex gap-x-1 opacity-80 mb-2">
            <span>In</span>
            <span className="flex font-medium hover:underline">{`React JS`}</span>
            <span>by</span>
            <span className="flex font-medium hover:underline">{`Tobi`}</span>
          </div>
          {/* text-2xl font-bold w-fit mb-4 hover:text-blue-700 duration-200 cursor-pointer */}
          <h3 className="font-bold text-2xl opacity-85 mb-3 hover:text-blue-800 duration-200 cursor-pointer">
            {title}
          </h3>

          <p className="opacity-50 font-medium text-sm mb-5 cursor-text">
            {content}
          </p>

          <div className="flex flex-row items-center gap-2 mb-6">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/windows/32/228BE6/facebook-like.png"
              alt="like"
            />
            <span>{likes}</span>

            <img
              src="https://img.icons8.com/?size=20&id=22050&format=png&color=228BE6"
              alt="comment"
            />
            <span>{comments}</span>

            <div className="flex justify-end w-full mr-5">
              <Link
                to={`/post/${title}`}
                className="border-2 border-black border-opacity-15 px-3 p-1 rounded-lg hover:bg-slate-50 duration-75 ease-out font-semibold"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
