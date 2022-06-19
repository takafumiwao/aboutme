import React from "react";

const RegisterBody = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="mt-4 flex flex-col">
        <label>名前</label>
        <input
          className="mt-2 w-56 h-8 md:w-72 placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          type="text"
          placeholder="名前"
        />
      </div>
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
      <div className="mt-4 flex flex-col w-56 md:w-72">
        <label className="mt-2 text-xs">
          ※パスワードには数字とアルファベットをそれぞれ1文字以上含めるようにしてください。
        </label>
      </div>
      <div className="mt-8">
        <button
          className="bg-black h-8 w-24 rounded-md text-white"
          type="submit"
        >
          登録
        </button>
      </div>
      <p className="mt-8 text-sm">
        ログインは
        <a className="text-white" href="/login">
          こちら
        </a>
      </p>
    </div>
  );
};

export default RegisterBody;
