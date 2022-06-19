import React from "react";

const LoginBody = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="mt-4 flex flex-col">
        <label>Eメール</label>
        <input
          className="mt-2 w-56 h-8 md:w-72 placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          type="email"
          placeholder="Eメール"
        />
      </div>
      <div className="mt-4 flex flex-col">
        <label>パスワード</label>
        <input
          className="mt-2 w-56 h-8 md:w-72 placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          type="password"
          placeholder="パスワード"
        />
      </div>
      <div className="mt-4 space-x-2">
        <input type="checkbox" />
        <label className="text-sm">ログイン情報を保持する</label>
      </div>
      <div className="mt-8">
        <button
          className="bg-black h-8 w-24 rounded-md text-white"
          type="submit"
        >
          ログイン
        </button>
      </div>
      <p className="mt-8 text-sm">
        新規登録は
        <a className="text-white" href="/register">
          こちら
        </a>
      </p>
    </div>
  );
};

export default LoginBody;
