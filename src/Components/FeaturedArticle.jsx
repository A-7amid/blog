import React from "react";
import { Link } from "react-router-dom";

const FeaturedArticle = () => {
  return (
    <header className="flex flex-col">
      <h3 className="text-3xl font-bold roboto-mono mt-6 my-4">
        Featured Article
      </h3>

      <div className="flex flex-col md:flex-row border-2 border-black border-opacity-10 rounded-lg">
        <img
          src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0x1qi3prdxb99ri13geu.png"
          alt="image topic"
          className="flex w-full md:w-[60%] rounded-l-lg"
        />

        <div className="flex flex-col mt-3 cursor-default mx-5">
          <div className="flex gap-x-1 opacity-80 mb-4">
            <span>In</span>
            <span className="flex font-medium hover:underline">{`React JS`}</span>
            <span>by</span>
            <span className="flex font-medium hover:underline">{`Tobi`}</span>
          </div>
          <Link
            to=""
            className="text-2xl font-bold w-fit mb-4 hover:text-blue-800 duration-200 cursor-pointer"
          >
            Latest Advancements in Artificial Intelligence
          </Link>
          <p className="text-black opacity-55 font-medium text-sm tracking-wide cursor-text mb-7">
            Explore with us the latest developments in the world of AI and their
            impact on our daily lives...
          </p>
          <div className="flex flex-row items-center gap-2 select-none h-full pb-6">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/windows/32/228BE6/facebook-like.png"
              alt="like"
            />
            <span>124</span>

            <img
              src="https://img.icons8.com/?size=20&id=22050&format=png&color=228BE6"
              alt="comment"
            />
            <span>13</span>

            <div className="flex justify-end w-full mr-5">
              <Link
                to=""
                className="border-2 border-black border-opacity-15 px-3 p-1 rounded-lg hover:bg-slate-100 duration-75 ease-out font-semibold"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FeaturedArticle;
