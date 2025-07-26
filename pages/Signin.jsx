import React from "react";

export default function Signin() {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-around items-center my-container mt-10 lg:mt-20 gap-x-8">
      <div className="my-text">
        <h1 className="text-4xl font-bold mb-6 lg:mb-15">خوش آمدید</h1>
        <form action="" className="flex flex-col items-center justify-center">
          <p className="text-2xl font-semibold">ثبت نام</p>
          <input
            type="text"
            placeholder="شماره همراه "
            className="text-[#898989] border w-full border-[#40404040] rounded-2xl px-4 py-1 mt-5"
          />
          <input
            type="password"
            placeholder="رمز عبور"
            className="text-[#898989] border w-full border-[#40404040] rounded-2xl px-4 py-1 mt-5"
          />
          <input
            type="password"
            placeholder="تکرار رمز عبور"
            className="text-[#898989] border w-full border-[#40404040] rounded-2xl px-4 py-1 mt-5"
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 font-bold rounded-full mt-10 cursor-pointer"
          >
            ارسال
          </button>
          <p className="text-sm font-bold mt-5 leading-1.5 min-w-73">
            رمز عبور خود را فراموش کرده اید؟{" "}
            <a href="" className="text-primary">
              بازیابی رمز عبور
            </a>{" "}
          </p>
          <p className="text-sm font-bold mt-5 leading-1.5">
            حساب کاربری ندارید؟
            <a href="/signin" className="text-primary">
              ثبت نام
            </a>
          </p>
        </form>
      </div>
      <img
        src="./img/LogAndSin.png"
        alt=""
        className="rounded-2xl w-86 mb-8 lg:w-165 xl:w-214"
      />
    </div>
  );
}
