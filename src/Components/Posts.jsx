import { Link } from "react-router-dom";
import { usePosts } from "../context/provider.context";
import Post from "./Post";
const Posts = () => {
  const { posts } = usePosts();

  // console.log(posts);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6 sm:mt-2">
      {posts.map((post, index) => (
        <Link to={`/post/${post.title}`} key={index}>
          <Post
            title={post.title}
            date={post.date}
            img={post.img}
            content={post.content.slice(0, 50)}
            likes={post.likes}
            comments={post.comments}
            userName={post.userName}
          />
        </Link>
      ))}
    </section>
  );
};

export default Posts;
