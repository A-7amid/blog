import { Link } from "react-router-dom";
import { usePosts } from "../context/provider.context";
import Post from "./Post";
const Posts = () => {
  const { posts } = usePosts();

  console.log(posts);

  return (
    <div className="flex flex-col w-1/2 m-24 gap-y-2">
      {posts.map((post, index) => (
        <Link key={index} to={`/post/${post.title}/${post.mainContent}`}>
          <Post
            title={post.title}
            date={post.date}
            img={post.img}
            content={post.content}
            likes={post.likes}
            comments={post.comments}
          />
        </Link>
      ))}
      {/* <Blog
        head={`
          Give your feedback on my updated Portfolio 👋`}
        date={`Jul 26,2024`}
        img="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F009pdi0m6bizhp9alf58.png"
        words="
          Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      />

      <Blog
        head={`
          Give your feedback on my updated Portfolio 👋`}
        date={`Jul 26,2024`}
        img="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F009pdi0m6bizhp9alf58.png"
        words="
          Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      />

      <Blog
        head={`
          Give your feedback on my updated Portfolio 👋`}
        date={`Jul 26,2024`}
        img="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F009pdi0m6bizhp9alf58.png"
        words="
          Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      /> */}
    </div>
  );
};

export default Posts;
