import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import ThemeToggle from "./ThemToggleButton";

const Header = () => {
  const [navShow, setNavShow] = useState(false);
  const headerLeftItemsRef = useRef(null);
  const mobileHeaderRef = useRef(null);

  const showNav = () => {
    setNavShow(true);
  };
  const navHide = () => {
    setNavShow(false);
  };

  useGSAP(() => {
    gsap.from(".header-items", {
      duration: 3,
      x: 300,
      opacity: 0,
      ease: "power1",
    });

    gsap.from(headerLeftItemsRef.current, {
      duration: 3,
      x: -300,
      opacity: 0,
      ease: "power1",
    });

    gsap.from(mobileHeaderRef.current, {
      duration: 2,
      y: -300,
      opacity: 0,
      ease: "power1",
    });
  });

  return (
    <header className="border-b border-light/25 dark:border-dark/25">
      {/* desktop header */}
      <div className="my-container hidden lg:flex items-center justify-between py-4">
        <ul className="flex items-center lg:gap-7 text-xl text-light dark:text-dark">
          <li className="header-items">
            <a href="#" className="flex items-center">
              <img src="/logo.png" alt="" className="w-8 h-8" />
              <span className="text-2xl font-bold">سفرکن</span>
            </a>
          </li>
          <li className="header-items">
            <a href="#">
              <span>هتل</span>
            </a>
          </li>
          <li className="header-items relative group">
            <a href="#" className="flex items-center">
              <span>تور داخلی</span>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                stroke="currentColor"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.0537 10.5L12.7608 15.7929C12.3703 16.1834 11.7371 16.1834 11.3466 15.7929L6.05371 10.5"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </a>
            <div className="hidden absolute top-8 left-0 group-hover:flex items-center justify-center gap-2 border-l-2 border-r-2 border-primary rounded-2xl">
              
            </div>
          </li>
          <li className="header-items">
            <a href="#" className="flex items-center">
              <span>تور خارجی</span>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                stroke="currentColor"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.0537 10.5L12.7608 15.7929C12.3703 16.1834 11.7371 16.1834 11.3466 15.7929L6.05371 10.5"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </a>
          </li>
          <li className="header-items">
            <a href="#">
              <span>بیمه مسافرتی</span>
            </a>
          </li>

          <li className="header-items">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              stroke="currentColor"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 21.75C6.35 21.75 1.75 17.15 1.75 11.5C1.75 5.85 6.35 1.25 12 1.25C17.65 1.25 22.25 5.85 22.25 11.5C22.25 17.15 17.65 21.75 12 21.75ZM12 2.75C7.17 2.75 3.25 6.68 3.25 11.5C3.25 16.32 7.17 20.25 12 20.25C16.83 20.25 20.75 16.32 20.75 11.5C20.75 6.68 16.83 2.75 12 2.75Z" />
              <path d="M22.5004 22.7499C22.3104 22.7499 22.1204 22.6799 21.9704 22.5299L19.9704 20.5299C19.6804 20.2399 19.6804 19.7599 19.9704 19.4699C20.2604 19.1799 20.7404 19.1799 21.0304 19.4699L23.0304 21.4699C23.3204 21.7599 23.3204 22.2399 23.0304 22.5299C22.8804 22.6799 22.6904 22.7499 22.5004 22.7499Z" />
            </svg>
          </li>
        </ul>
        <div ref={headerLeftItemsRef} className="flex items-center gap-3">
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
      <div
        ref={mobileHeaderRef}
        className="my-container flex lg:hidden items-center text-light dark:text-dark justify-between py-4"
      >
        {/* dark & light them buttom */}
        <ThemeToggle />
        {/* logo & title */}
        <div>
          <a href="#" className="flex items-center">
            <img src="/logo.png" alt="" className="w-8 h-8" />
            <span className="text-2xl font-bold">سفرکن</span>
          </a>
        </div>
        {/* three bar */}
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
      {/* nav bar */}
      <div
        className={`fixed top-0 transition-all lg:hidden ${
          navShow ? "left-0" : "-left-70"
        } h-full w-60 bg-white dark:bg-dark-background z-100 `}
      >
        <div className="flex flex-col items-center gap-7 p-6">
          <div className="flex w-full items-center justify-between border-b border-light/25 dark:border-dark/25 pb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="my-text h-6 w-6"
              onClick={navHide}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>

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
                <svg
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
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>{" "}
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <span>تور خارجی</span>
                <svg
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
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>{" "}
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
      {/* dark back ground when nav open */}
      <div
        onClick={navHide}
        className={`fixed top-0 left-0 lg:hidden w-screen h-screen z-50 bg-black/50 transition-all ${
          navShow ? "opacity-100 visible" : "opacity-0 invisible"
        } `}
      ></div>
    </header>
  );
};

export default Header;
