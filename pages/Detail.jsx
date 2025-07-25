import React, { useState } from "react";
import AccordionItem from "../components/AccordionItem";
import { detailTab, detailTabData, dayProgram, checkboxs } from "../data/data";

function Detail() {
  const [activeTab, setActiveTab] = useState("بررسی");

  return (
    <div className="my-container my-text">
      {/* header desctop */}
      <div className="items-center justify-between mt-5 hidden md:flex">
        <div>
          <p className="font-semibold text-dark-40 dark:text-white">
            تورخارجی/ تور اروپا/ تور ترکیه/آنتالیا
          </p>
        </div>
        <div>
          <button className="flex items-center gap-x-3 font-semibold border border-[#40404040] rounded-4xl px-6 py-4">
            <p className="text-dark-40 dark:text-white">بازگشت به خانه</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6 text-dark-40 dark:text-white"
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
      {/* header part movile */}
      <div className="flex md:hidden justify-between items-center mt-4">
        <h1 className="text-xl font-bold">تور 7 روزه ترکیه/آنتالیا</h1>
        <span className="bg-gray-100 dark:bg-[#2E2E2E] rounded-full p-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="text-dark-40 dark:text-white"
          >
            <path
              d="M12 7V10M12 10V13M12 10H15M12 10H9M4 21.191V4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4V21.191C20 21.5627 19.6088 21.8044 19.2764 21.6382L12.8944 18.4472C12.3314 18.1657 11.6686 18.1657 11.1056 18.4472L4.72361 21.6382C4.39116 21.8044 4 21.5627 4 21.191Z"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </span>
      </div>
      <div className="mt-4 flex md:hidden">
        <span className="font-medium text-[#40404099] dark:text-white">
          تور خارجی/ تور اروپا
        </span>
      </div>
      {/* header image */}
      <div className="mt-5 relative flex justify-center">
        <img
          src="/img/detail/1.png"
          className="w-full h-80 md:h-150 object-cover rounded-4xl p-3"
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
              className="size-6"
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
              className="size-6"
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
        <div className="absolute flex items-center gap-x-3 py-1.5 md:py-4 px-2 md:px-3 rounded-full bottom-10 left-10 bg-light-background dark:bg-dark-background">
          <h3 className="font-bold my-text text-baseh md:text-[32px]">
            Türkiye
          </h3>
          <img
            src="/img/detail/flag-1.png"
            className="w-10 md:w-full h-10 md:h-full"
            alt=""
          />
        </div>
      </div>
      {/* right and left content */}
      <div className="flex justify-between mt-5 gap-x-8">
        {/* right content */}
        <div className="lg:flex-2/3">
          {/* header part start */}
          <div className="hidden md:flex justify-between items-center">
            <h1 className="text-4xl font-bold">تور 7 روزه ترکیه/آنتالیا</h1>
            <span className="bg-gray-100 dark:bg-[#2E2E2E] rounded-full p-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="text-dark-40 dark:text-white"
              >
                <path
                  d="M12 7V10M12 10V13M12 10H15M12 10H9M4 21.191V4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4V21.191C20 21.5627 19.6088 21.8044 19.2764 21.6382L12.8944 18.4472C12.3314 18.1657 11.6686 18.1657 11.1056 18.4472L4.72361 21.6382C4.39116 21.8044 4 21.5627 4 21.191Z"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </div>
          <div className="hidden md:inline-block mt-4">
            <span className="font-medium text-[#40404099] dark:text-white">
              تور خارجی/ تور اروپا
            </span>
          </div>
          {/* tabbed interface */}
          <div className="mt-4 relative">
            <div className="flex flex-wrap items-center gap-y-3 gap-x-15 font-semibold text-2xl px-3 text-dark-40 dark:text-white">
              {detailTab.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveTab(tab);
                  }}
                  className={`cursor-pointer ${
                    activeTab === tab
                      ? "text-primary border-b border-primary pb-2"
                      : ""
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="mt-4 w-fit line-clamp-6 text-lg font-medium">
              {detailTabData[activeTab]}
            </div>
            <div className="flex lg:hidden mt-3 items-center justify-between">
              <h3 className="text-3xl font-semibold">۴۵.۰۰۰.۰۰۰ تومان</h3>
              <button className="bg-primary cursor-pointer text-white text-2xl py-3 px-14 rounded-full">
                رزرو کنید
              </button>
            </div>
          </div>
          <span className="inline-block mt-4 h-0.25 w-full bg-[#40404040]"></span>
          {/* features */}
          <div>
            <h3 className="text-[20px] text-dark-40 dark:text-white my-4 font-bold">
              ویژگی ها
            </h3>
            <div className="my-4 flex flex-wrap gap-8 items-center">
              <span className="flex gap-x-2 font-medium">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="text-dark-40 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00044 16.9999H19.0004M7.17468 13.2722C8.60956 14.1006 10.4443 13.609 11.2728 12.1741C12.1012 10.7392 11.6096 8.90447 10.1747 8.07605M13.0559 16.6635C12.6894 14.4849 14.1583 12.4218 16.3369 12.0553M12.4477 3.89431L20.2768 19.5527C20.6093 20.2176 20.1258 20.9999 19.3824 20.9999H4.61848C3.8751 20.9999 3.3916 20.2176 3.72405 19.5527L11.5532 3.89431C11.7375 3.52579 12.2634 3.52579 12.4477 3.89431Z"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                <p>ناهار رایگان</p>
              </span>
              <span className="flex gap-x-2 font-medium">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="text-dark-40 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.80762 9.19238C7.88443 4.11556 16.1156 4.11556 21.1924 9.19238M5.63599 12.0208C9.15071 8.50608 14.8492 8.50608 18.3639 12.0208M8.46448 14.8492C10.4171 12.8966 13.5829 12.8966 15.5355 14.8492M13 18.3848C13 18.937 12.5523 19.3848 12 19.3848C11.4477 19.3848 11 18.937 11 18.3848C11 17.8325 11.4477 17.3848 12 17.3848C12.5523 17.3848 13 17.8325 13 18.3848Z"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>

                <p>وای فای رایگان</p>
              </span>
              <span className="flex gap-x-2 font-medium">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="text-dark-40 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.0005 8H20.0005M7.00048 10H12.0005M7.16172 3H11.8392C13.5162 3 14.4486 4.93986 13.401 6.24939L12.6615 7.17376C12.248 7.69064 12.117 8.37865 12.3116 9.01132L15.2041 18.4118C15.5998 19.6979 14.6382 21 13.2926 21H5.70839C4.36278 21 3.40111 19.6979 3.79684 18.4118L6.6893 9.01132C6.88397 8.37865 6.75299 7.69064 6.33948 7.17376L5.59999 6.24939C4.55237 4.93986 5.48471 3 7.16172 3Z"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>

                <p>میان وعده رایگان</p>
              </span>
              <span className="flex gap-x-2 font-medium">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="text-dark-40 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 8.5H14.5M12 6V11M8 15H16M8 18H16M7.2 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8V5.2C20 4.07989 20 3.51984 19.782 3.09202C19.5903 2.71569 19.2843 2.40973 18.908 2.21799C18.4802 2 17.9201 2 16.8 2H7.2C6.0799 2 5.51984 2 5.09202 2.21799C4.71569 2.40973 4.40973 2.71569 4.21799 3.09202C4 3.51984 4 4.0799 4 5.2V18.8C4 19.9201 4 20.4802 4.21799 20.908C4.40973 21.2843 4.71569 21.5903 5.09202 21.782C5.51984 22 6.07989 22 7.2 22Z"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>

                <p>بیمه مسافرتی</p>
              </span>
            </div>
          </div>
          <span className="inline-block mt-4 h-0.25 w-full bg-[#40404040]"></span>
          {/* tour schedule / accordions */}
          <div className="mt-4">
            <h3 className="text-[20px] text-dark-40 dark:text-white my-4 font-bold">
              برنامه تور (روز به روز)
            </h3>
            <div className="mt-4">
              {dayProgram.map((item, index) => (
                <AccordionItem
                  key={index}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
          </div>
        </div>
        {/* left content */}
        <div className="hidden lg:inline-block flex-1/3 border border-[#40404040] bg-white dark:bg-dark-background rounded-4xl  p-6">
          {/* header with off and price */}
          <div className="flex items-center justify-between">
            <span className="bg-[#FF6588] text-white text-xl rounded-3xl px-6 py-1">
              20%
            </span>
            <p className="font-semibold text-2xl">45.000.000 تومان/هرفرد</p>
          </div>

          <span className="inline-block w-full h-0.25 bg-[#40404040]"></span>
          {/* start adn finish time */}
          <div className="flex flex-col items-center gap-y-5 mt-4">
            <div className="flex items-center justify-around w-full font-bold text-sm">
              <p>تاریخ شروع</p>
              <p>تاریخ اتمام </p>
            </div>
            <div className="flex items-center justify-around w-full text-[20px]">
              <span className="flex items-center gap-x-2 bg-[#F5F6FA] dark:bg-[#2E2E2E] px-6 py-3 rounded-full">
                <p>۱۴۰۳/۱/۱۲</p>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-dark-40 dark:text-white"
                >
                  <path
                    d="M2.5 12C2.5 8.22876 2.5 6.34315 3.67157 5.17157C4.84315 4 6.72876 4 10.5 4H14.5C18.2712 4 20.1569 4 21.3284 5.17157C22.5 6.34315 22.5 8.22876 22.5 12V14C22.5 17.7712 22.5 19.6569 21.3284 20.8284C20.1569 22 18.2712 22 14.5 22H10.5C6.72876 22 4.84315 22 3.67157 20.8284C2.5 19.6569 2.5 17.7712 2.5 14V12Z"
                    stroke-width="1.5"
                  />
                  <path
                    d="M7.5 4V2.5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M17.5 4V2.5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M9.5 14.5L11 13V17"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.5 16V14C13.5 13.4477 13.9477 13 14.5 13C15.0523 13 15.5 13.4477 15.5 14V16C15.5 16.5523 15.0523 17 14.5 17C13.9477 17 13.5 16.5523 13.5 16Z"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path d="M3 9H22" stroke-width="1.5" stroke-linecap="round" />
                </svg>
              </span>

              <span className="flex items-center gap-x-2 bg-[#F5F6FA] dark:bg-[#2E2E2E] px-6 py-3 rounded-full">
                <p>۱۴۰۳/۱/۱۸</p>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-dark-40 dark:text-white"
                >
                  <path
                    d="M2.5 12C2.5 8.22876 2.5 6.34315 3.67157 5.17157C4.84315 4 6.72876 4 10.5 4H14.5C18.2712 4 20.1569 4 21.3284 5.17157C22.5 6.34315 22.5 8.22876 22.5 12V14C22.5 17.7712 22.5 19.6569 21.3284 20.8284C20.1569 22 18.2712 22 14.5 22H10.5C6.72876 22 4.84315 22 3.67157 20.8284C2.5 19.6569 2.5 17.7712 2.5 14V12Z"
                    stroke-width="1.5"
                  />
                  <path
                    d="M7.5 4V2.5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M17.5 4V2.5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M9.5 14.5L11 13V17"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.5 16V14C13.5 13.4477 13.9477 13 14.5 13C15.0523 13 15.5 13.4477 15.5 14V16C15.5 16.5523 15.0523 17 14.5 17C13.9477 17 13.5 16.5523 13.5 16Z"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path d="M3 9H22" stroke-width="1.5" stroke-linecap="round" />
                </svg>
              </span>
            </div>
          </div>

          <p className="my-4 font-medium text-sm">تعداد افراد</p>
          <AccordionItem
            title={"3 بزرگ سال, 1 کودک"}
            content={
              " افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان "
            }
            className={
              "!border-0 bg-[#F5F6FA] dark:bg-[#2E2E2E] rounded-3xl overflow-hidden"
            }
          />

          <AccordionItem
            title={"ارسال مدارک مورد نیاز"}
            content={
              " افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان "
            }
            className={"!border-0 my-4 "}
          />

          <span className="flex items-center justify-between">
            <p className="my-4 font-medium text-sm">مزایا اضافه</p>
            <svg
              width="16"
              height="1"
              viewBox="0 0 16 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="16"
                y1="0.5"
                x2="-4.37114e-08"
                y2="0.499999"
                stroke="#404040"
              />
            </svg>
          </span>
          {/* checkbox boxs */}
          <div className="space-y-4">
            {checkboxs.map((checkbox, index) => (
              <div key={index} className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span
                    className={`font-medium text-[#40404040] dark:text-[#ffffff40]  ${
                      checkbox.isActive ? "text-dark-40 dark:text-white" : ""
                    }`}
                  >
                    {checkbox.title}
                  </span>
                </label>
                <p
                  className={`font-medium text-[#40404040] dark:text-[#ffffff40] ${
                    checkbox.isActive ? "text-dark-40 dark:text-white" : ""
                  }`}
                >
                  {checkbox.price} تومان
                </p>
              </div>
            ))}
          </div>
          <p className="my-4 font-medium text-sm">هزینه ها</p>
          {/* price card */}
          <div className="bg-[#F5F6FA] dark:bg-[#2E2E2E] rounded-4xl py-2 px-4 flex flex-col gap-y-3">
            <div className="flex justify-between items-center">
              <p>تور ۷ روزه </p>
              <p className="font-medium">۱۵۰.۰۰۰.۰۰۰ تومان</p>
            </div>
            <div className="flex justify-between items-center">
              <p>صبحانه برای هر نفر</p>
              <p className="font-medium">۶۰.۰۰۰ تومان</p>
            </div>
            <div className="flex justify-between items-center">
              <p>هزینه سرویس</p>
              <p className="font-medium">۶۰.۰۰۰ تومان</p>
            </div>
            <div className="flex justify-between items-center">
              <p>تخفیف 20%</p>
              <p className="font-medium">۲۰.۰۰۰.۰۰۰- تومان</p>
            </div>
          </div>

          <div className="flex justify-between items-center my-6">
            <p>قیمت نهایی</p>
            <p className="font-medium">۱۳۰.۰۰۰.۰۰۰ تومان</p>
          </div>

          <button className="bg-primary w-full cursor-pointer text-white text-2xl py-3 rounded-4xl">
            رزرو کنید
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
