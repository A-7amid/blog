import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { usePosts } from "../context/provider.context";
import { useEffect } from "react";

const PostContent = () => {
  const { posts } = usePosts();

  const params = useParams();

  for (let post of posts) {
    if (post.title == params.postTitle) {
      var content = post.content;
      var image = post.img;
    }
    continue;
  }

  return (
    <div>
      <Navbar />
      <div className="bg-white flex flex-col items-center mx-auto md:w-2/3 mb-24 mt-4">
        <img
          src={image}
          alt="image"
          className="overflow-hidden mb-10 md:rounded-t-lg "
        />
        <div className="md:mx-auto mx-4">
          <h1 className="text-black text-3xl font-bold sm:text-4xl md:text-5xl md:font-semibold opacity-90 mb-6 ">
            {params.postTitle}
          </h1>

          <p className="text-xl font-normal roboto-mono">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default PostContent;
