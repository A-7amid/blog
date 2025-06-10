import { usePosts } from "../context/posts.context";
import Post from "./Post";
const Posts = () => {
  const { posts } = usePosts();

  return (
    <div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6 sm:mt-2">
        {posts.length > 1 &&
          posts.map((post, index) => (
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

      {posts.length === 0 && (
        <div className="font-semibold flex mt-5">No results found.</div>
      )}
    </div>
  );
};

export default Posts;
