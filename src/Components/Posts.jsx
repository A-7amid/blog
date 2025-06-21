import { Link } from "react-router-dom";
import { usePosts } from "../context/posts.context";
import Post from "./Post";
import { ArrowRight } from "lucide-react";
const Posts = () => {
  const { posts } = usePosts();

  return (
    <section id="articles" className="w-[1220px]">
      <div className="flex flex-col gap- mb-7">
        <h3 className="text-4xl font-bold text-center roboto-mono mt-6 mb-4">
          Latest Articles
        </h3>

        <span className="text-xl font-[400] text-gray-500 text-center mb-8">
          Fresh insights from our community of experts
        </span>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-3 gap-6 sm:mt-2">
        {posts.length > 1 &&
          posts.map((post, index) => (
            <Post
              key={index}
              title={post.title}
              date={post.date}
              img={post.img}
              content={post.content.slice(0, 130)}
              likes={post.likes}
              comments={post.comments}
              userName={post.userName}
              category={post.category.replace("-", " ").replace("-", " & ")}
            />
          ))}
      </section>

      {posts.length === 0 && (
        <div className="font-semibold flex mt-5">No results found.</div>
      )}

      <div className="flex items-center justify-center">
        <Link
          to="/"
          className="border border-neutral-200 bg-white rounded-md flex items-center gap-3.5 transition duration-200 hover:border-blue-600 hover:text-blue-600 justify-center w-fit my-8 py-2 px-8 font-[500] text-lg"
        >
          View All Articles
          <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
};

export default Posts;
