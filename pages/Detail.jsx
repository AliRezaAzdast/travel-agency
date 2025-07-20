import React from "react";

function Detail() {
  return (
    <div className="my-container my-text">
      <div className="flex items-center justify-between mt-5">
        <div>
          <p className="font-semibold text-dark-40">
            تورخارجی/ تور اروپا/ تور ترکیه/آنتالیا
          </p>
        </div>
        <div>
          <button className="flex items-center gap-x-3 font-semibold border border-[rgb(64,64,64,0.25)] rounded-4xl px-6 py-4">
            <p className="text-dark-40">بازگشت به خانه</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6 text-dark-40"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-5 relative flex justify-center">
        <img
          src="/img/detail/1.png"
          className="w-full h-150 object-cover rounded-4xl p-3"
        />
        <div className="absolute flex items-center justify-between gap-x-2 top-5 bg-[#C1C1C133] w-[95%] text-white text-2xl p-3 mt-3 rounded-2xl">
          <div className="flex items-center gap-x-1">
            <p>آنتالیا</p>
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
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
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
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <span className="h-0.25 w-[80%] bg-white rounded-full"></span>
          <p>1/3</p>
        </div>
        <div className="absolute flex items-center gap-x-3 py-4 px-3 rounded-full bottom-10 left-10 bg-light-background dark:bg-dark-background">
          <h3 className="font-bold my-text text-[32px]">Türkiye</h3>
          <img src="/img/detail/flag-1.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Detail;
