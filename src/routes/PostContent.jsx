import { useParams } from "react-router-dom";
import Navbar from "../Components/navbar";

const PostContent = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <Navbar />
      <div className="bg-white flex flex-col items-center mx-auto w-2/3 mb-24 mt-4">
        <img
          src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F009pdi0m6bizhp9alf58.png"
          alt="img"
          className="overflow-hidden mb-7 rounded-t-lg"
        />
        <div className=" mx-16">
          <h1 className="text-black text-5xl font-semibold opacity-90 mb-10 ">
            {params.postTitle}
          </h1>

          <p className="text-xl font-normal roboto-mono">
            {params.mainContent}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostContent;
