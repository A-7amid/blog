import { useContext } from "react";
import Blog from "./Blog";

const Blogs = () => {
  return (
    <div className="flex flex-col w-7/12 m-24 gap-y-1">
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
      />

      <Blog
        head={`
          Give your feedback on my updated Portfolio 👋`}
        date={`Jul 26,2024`}
        img="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F009pdi0m6bizhp9alf58.png"
        words="
          Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      />
    </div>
  );
};

export default Blogs;
