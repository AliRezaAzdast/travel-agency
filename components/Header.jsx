import React, { useState } from "react";
import ThemeToggle from "./ThemToggleButton";

const Header = () => {
  const [navShow, setNavShow] = useState(false);

  const showNav = () => {
    setNavShow(true);
  };
  const navHide = () => {
    setNavShow(false);
  };

  return (
    <header className="border-b border-light/25 dark:border-dark/25">
      {/* desktop header */}
      <div className="my-container hidden lg:flex items-center justify-between py-4">
        <ul className="flex items-center lg:gap-7 text-xl text-light dark:text-dark">
          <li>
            <a href="#" className="flex items-center">
              <img src="/logo.png" alt="" className="w-8 h-8" />
              <span className="text-2xl font-bold">سفرکن</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>هتل</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <span>تور داخلی</span>
              <img src="/svg/down.svg" alt="" className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <span>تور خارجی</span>
              <img src="/svg/down.svg" alt="" className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a href="#">
              <span>بیمه مسافرتی</span>
            </a>
          </li>

          <li>
            <img src="/svg/search-normal.svg" alt="" />
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a className="bg-primary text-white rounded-full p-2">
            <img src="/svg/bag-happy.svg" alt="" className="h-6 w-6" />
          </a>

          <a className="flex items-center gap-3 border border-light/25 dark:border-dark/25 rounded-full py-2 px-6">
            <img src="/svg/user.svg" alt="" className="h-6 w-6" />
            <span className="text-xl text-light dark:text-dark font-semibold">
              حساب کاربری
            </span>
          </a>
        </div>
      </div>

      {/* mobile header */}
      <div className="my-container flex lg:hidden items-center text-light dark:text-dark justify-between py-4">
        <div>
          <a href="#" className="flex items-center">
            <img src="/logo.png" alt="" className="w-8 h-8" />
            <span className="text-2xl font-bold">سفرکن</span>
          </a>
        </div>
        <ThemeToggle />
        <div>
          <svg
            onClick={showNav}
            className="cursor-pointer text-light dark:text-dark"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>

      <div
        className={`fixed top-0 transition-all lg:hidden ${
          navShow ? "left-0" : "-left-70"
        } h-full w-60 bg-white z-10 `}
      >
        <div className="flex flex-col items-center gap-7 p-6">
          <div className="flex w-full items-center justify-between border-b border-light/25 dark:border-dark/25 pb-3">
            <img
              src="/svg/x-symbol.svg"
              alt=""
              className="h-4 w-4"
              onClick={navHide}
            />
            <img src="/logo.png" alt="" className="h-8 w-8" />
          </div>
          <ul className="flex flex-col items-center gap-7 text-xl text-light dark:text-dark">
            <li>
              <a href="#">
                <span>هتل</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <span>تور داخلی</span>
                <img src="/svg/down.svg" alt="" className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <span>تور خارجی</span>
                <img src="/svg/down.svg" alt="" className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a href="#">
                <span>بیمه مسافرتی</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>سفرنامه</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        onClick={navHide}
        className={`fixed top-0 left-0 lg:hidden w-screen h-screen bg-black/50 transition-all ${
          navShow ? "opacity-100 visible" : "opacity-0 invisible"
        } `}
      ></div>
    </header>
  );
};

export default Header;
