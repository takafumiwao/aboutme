import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed w-screen flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a
        href="http://localhost:3000/"
        className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <span className="ml-3 text-xl">My Investory</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link className="mr-8 hover:text-gray-400" to={`/`}>
          ホーム
        </Link>
        <Link className="mr-8 hover:text-gray-400" to={`/register`}>
          新規登録
        </Link>
        <Link className="mr-8 hover:text-gray-400" to={`/login`}>
          ログイン
        </Link>
      </nav>
    </div>
  );
};

export default Header;
