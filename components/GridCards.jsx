import React from "react";
import { travels } from "../data/data";
import Card from "./Card";

const GridCards = () => {
  return (
    <section className="mt-20">
      <div className="my-container my-text">
        {/* title */}
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <h1 className="text-[32px] relative font-bold tracking-tight my-title-after">
              پرفروش ترین تور ها
            </h1>
            <img src="/img/icons/boom.png" className="h-4 w-4" alt="" />
            <div className="hidden lg:flex">
              <ul className="flex gap-5">
                <li className="text-xl font-bold text-dark-40 dark:text-[#FBFBFB] border-b border-dark-background dark:border-[#FBFBFB] pb-2">
                  <button className="cursor-pointer">همه تور ها</button>
                </li>
                <li className="text-xl font-bold text-dark-40/50 dark:text-[#FBFBFB]/50">
                  <button className="cursor-pointer">تور ایران</button>
                </li>
                <li className="text-xl font-bold text-dark-40/50 dark:text-[#FBFBFB]/50">
                  <button className="cursor-pointer">تور اروپا</button>
                </li>
                <li className="text-xl font-bold text-dark-40/50 dark:text-[#FBFBFB]/50">
                  <button className="cursor-pointer">تور آسیا</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="cursor-pointer hidden lg:flex">
              <svg
                width="27"
                height="27"
                stroke="currentColor"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5365 20.1182H5.25488"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.1055 20.1192C17.1055 22.4161 17.8715 23.1811 20.1674 23.1811C22.4634 23.1811 23.2294 22.4161 23.2294 20.1192C23.2294 17.8221 22.4634 17.0571 20.1674 17.0571C17.8715 17.0571 17.1055 17.8221 17.1055 20.1192Z"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.9482 8.31836H23.2288"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.38 8.3169C11.38 6.0209 10.6139 5.25488 8.3179 5.25488C6.02088 5.25488 5.25488 6.0209 5.25488 8.3169C5.25488 10.6139 6.02088 11.3789 8.3179 11.3789C10.6139 11.3789 11.38 10.6139 11.38 8.3169Z"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button className="bg-[#EAEAEA] text-[#404040] rounded-full p-3 font-semibold cursor-pointer">
              دیدن همه
            </button>
          </div>
        </div>
        {/* few part in mobile */}
        <div className="flex justify-between items-center mt-4">
          <div className="lg:hidden">
            <ul className="flex gap-5">
              <li className="text-xl font-bold text-dark-40 dark:text-[#FBFBFB] border-b border-dark-background dark:border-[#FBFBFB] pb-2">
                <button className="cursor-pointer">همه تور ها</button>
              </li>
              <li className="text-xl font-bold text-dark-40/50 dark:text-[#FBFBFB]/50">
                <button className="cursor-pointer">تور ایران</button>
              </li>
              <li className="text-xl font-bold text-dark-40/50 dark:text-[#FBFBFB]/50">
                <button className="cursor-pointer">تور اروپا</button>
              </li>
              <li className="text-xl font-bold text-dark-40/50 dark:text-[#FBFBFB]/50">
                <button className="cursor-pointer">تور آسیا</button>
              </li>
            </ul>
          </div>
          <button className="cursor-pointer lg:hidden flex ml-5">
            <svg
              width="27"
              height="27"
              stroke="currentColor"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5365 20.1182H5.25488"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.1055 20.1192C17.1055 22.4161 17.8715 23.1811 20.1674 23.1811C22.4634 23.1811 23.2294 22.4161 23.2294 20.1192C23.2294 17.8221 22.4634 17.0571 20.1674 17.0571C17.8715 17.0571 17.1055 17.8221 17.1055 20.1192Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.9482 8.31836H23.2288"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.38 8.3169C11.38 6.0209 10.6139 5.25488 8.3179 5.25488C6.02088 5.25488 5.25488 6.0209 5.25488 8.3169C5.25488 10.6139 6.02088 11.3789 8.3179 11.3789C10.6139 11.3789 11.38 10.6139 11.38 8.3169Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* cards */}
        <div className="flex flex-wrap gap-2 items-center justify-center">
          {travels.map((travel) => (
            <Card key={travel.id} {...travel} />
          ))}
        </div>

        {/* arrow */}
        <div className="w-full hidden mt-8 sm:flex justify-center">
          <div className="flex items-center justify-center bg-[#D3D3D3] p-5 rounded-full w-[56px] h-[56px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="4"
              stroke="currentColor"
              className=" w-20 h-20 text-white "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GridCards;
