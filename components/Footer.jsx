import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 bg-[#232323] ">
      <div className="my-container pt-8">
        <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-y-5 sm:gap-y-0 items-start border-b pb-7 border-[#ffffff]">
          <ul className="flex gap-5 *:border-l *:pl-6 *:border-[#ffffff]/50">
            <li>
              <a href="" className="text-[#ffffff] font-medium">
                صفحه اصلی
              </a>
            </li>
            <li>
              <a href="" className="text-[#ffffff] font-medium">
                درباره ما
              </a>
            </li>
            <li>
              <a href="" className="text-[#ffffff] font-medium">
                تماس
              </a>
            </li>
          </ul>
          <div>
            <a href="#" className="flex items-center">
              <img src="/logo.png" alt="" className="w-8 h-8" />
              <span className="text-2xl font-bold text-white">سفرکن</span>
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center mt-7 pb-7">
          <p className="text-[#ffffff] text-sm font-medium">
            تمامی حقوق برای کاربر این محصول محفوظ است.
          </p>
          <div className="flex items-center gap-5">
                
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
