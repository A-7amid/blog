import { usePosts } from "../context/provider.context";
import Post from "./Post";
const Posts = () => {
  const { posts } = usePosts();

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6 sm:mt-2">
      {posts.map((post, index) => (
        <Post
          key={index}
          title={post.title}
          date={post.date}
          img={post.img}
          content={post.content.slice(0, 50)}
          likes={post.likes}
          comments={post.comments}
          userName={post.userName}
        />
      ))}
    </section>
  );
};

export default Posts;
