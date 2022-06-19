import React from "react";
import { FaUserAlt } from "react-icons/fa";

const HomeBody = () => {
  return (
    <div className="flex justify-center flex-wrap h-full items-center space-x-16 md:flex-row ">
      <div>
        <h1 className="title-font text-3xl mb-4 font-semibold text-gray-900">
          自分の棚卸しをしよう。
        </h1>
      </div>
      <div>
        <FaUserAlt className="pb-8 h-32 w-32 fill-white" />
      </div>
    </div>
  );
};

export default HomeBody;
