import { Link } from "react-router-dom";
import { usePosts } from "../context/provider.context";
import Post from "./Post";
const Posts = () => {
  const { posts } = usePosts();

  // console.log(posts);

  return (
    <div className="flex flex-col select-none sm:mx-2 sm:w-full lg:w-[56%] gap-y-2 sm:mt-2">
      {posts.map((post, index) => (
        <Link key={index} to={`/post/${post.title}`}>
          <Post
            title={post.title}
            date={post.date}
            img={post.img}
            content={post.content.slice(0, 22)}
            likes={post.likes}
            comments={post.comments}
          />
        </Link>
      ))}
    </div>
  );
};

export default Posts;
