import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="text-3xl flex-col font-semibold flex items-center h-64 gap-y-10 justify-center">
      <h1 className="text-6xl text-red-600">404 - Page Not Found</h1>
      <Link className="bg-green-500 rounded-lg px-4 py-2" to={"/"}>
        Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
