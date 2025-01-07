import { Link } from "react-router-dom";

const Blog = ({ title, img, date, content }) => {
  return (
    <Link to={`/blog`} className="flex bg-white rounded-lg py-8 p-5">
      <div className="flex flex-col w-full gap-4">
        <h3 className="font-extrabold text-xl">{title}</h3>

        <p className="opacity-60 font-medium text-sm">{content}</p>

        <div className="flex gap-5 items-end h-full">
          <div className="flex items-end">
            <div className="flex flex-row items-center gap-6">
              <span className="opacity-60 font-medium text-sm">{date}</span>
              <span className="size-4 mr-3 gap-1 opacity-60 items-center font-medium text-sm flex">
                <img src="imgs/like.png" alt="" className="" />
                <span>3k</span>
              </span>

              <span className="items-center opacity-60 font-medium text-sm flex">
                <svg
                  className="size-[16px] mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 48 48"
                >
                  <path d="M 24 5 C 11.938759 5 2 13.42848 2 24 C 2 27.816747 3.3193921 31.369043 5.5488281 34.333984 C 4.9869207 36.756046 3.7959954 39.098472 2.9375 40.291016 L 2.9394531 40.291016 C 2.4512957 40.968852 2.4734674 41.853394 2.8476562 42.478516 C 3.2218452 43.103637 3.9888765 43.543224 4.8164062 43.4375 C 7.0972371 43.146609 10.756642 42.635664 14.384766 40.902344 A 1.0001 1.0001 0 1 0 13.523438 39.097656 C 10.233088 40.669606 6.8176125 41.165956 4.5664062 41.453125 C 5.6447727 39.953605 6.9372647 37.394913 7.5488281 34.570312 A 1.0001 1.0001 0 0 0 7.5605469 33.736328 A 1.0001 1.0001 0 0 0 7.3359375 33.390625 A 1.0001 1.0001 0 0 0 7.3300781 33.386719 C 5.2181907 30.683804 4 27.466822 4 24 C 4 14.68952 12.865241 7 24 7 C 35.134759 7 44 14.68952 44 24 C 44 33.31048 35.134759 41 24 41 C 22.001253 41 20.072542 40.749669 18.253906 40.287109 A 1.0004656 1.0004656 0 1 0 17.761719 42.226562 C 19.741083 42.730004 21.834747 43 24 43 C 36.061241 43 46 34.57152 46 24 C 46 13.42848 36.061241 5 24 5 z"></path>
                </svg>
                <span>31</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-end ml-5 ">
        <img src={img} alt="topic" className="w-72" />
      </div>
    </Link>
  );
};

export default Blog;
