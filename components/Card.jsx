import React from "react";

const Card = ({ img, title, date, star, price, off, className }) => {
  const formatPrice = (price) => {
    // Convert English numbers to Persian
    const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    const formattedPrice = price
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",") // Add commas
      .replace(/\d/g, (d) => persianNumbers[d]); // Convert to Persian digits

    return formattedPrice;
  };
  return (
    <div className={`flex flex-col relative bg-white dark:bg-[#1D1D1D] p-3 mt-10 border border-[#404040]/25 dark:border-white/25 rounded-2xl ${className}`}>
      <img src={img} className="w-[381px] h-[260px] rounded-2xl " alt="" />
      <div className="flex w-full mt-2 justify-between items-center">
        <p className="text-[28px] text-dark-40 dark:text-[#FBFBFB] font-semibold">
          {title}
        </p>
        {/* star */}
        <div className="flex gap-2 items-center">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.6041 7.20582L12.7001 6.49312L10.508 2.04888C10.4481 1.9272 10.3496 1.8287 10.2279 1.76882C9.92273 1.61817 9.5519 1.74371 9.39931 2.04888L7.20713 6.49312L2.30321 7.20582C2.16801 7.22513 2.0444 7.28887 1.94976 7.38544C1.83534 7.50304 1.7723 7.66125 1.77447 7.82531C1.77664 7.98937 1.84386 8.14586 1.96135 8.26039L5.5094 11.7196L4.67115 16.6042C4.6515 16.7178 4.66407 16.8347 4.70745 16.9415C4.75083 17.0484 4.82328 17.1409 4.91658 17.2087C5.00988 17.2765 5.1203 17.3167 5.23533 17.3249C5.35035 17.3331 5.46537 17.3089 5.56734 17.2551L9.95364 14.949L14.3399 17.2551C14.4597 17.3188 14.5987 17.3401 14.732 17.3169C15.0681 17.259 15.2941 16.9403 15.2361 16.6042L14.3979 11.7196L17.9459 8.26039C18.0425 8.16574 18.1062 8.04213 18.1255 7.90693C18.1777 7.56893 17.9421 7.25604 17.6041 7.20582Z"
              fill="#FFDA19"
            />
          </svg>
          <span className="text-dark-40 text-[26px] dark:text-[#FBFBFB]">
            {formatPrice(star)}
          </span>
        </div>
      </div>

      <span className="text-dark-40/50 dark:text-[#FBFBFB]/50 text-[20px]">
        {date}
      </span>

      <div className="flex items-center justify-between mt-5">
        <div className="text-[#000000]/70 font-semibold dark:text-[#FBFBFB] text-3xl">
          {formatPrice(price)}
          <span className="text-2xl"> تومان</span>{" "}
          <span className="text-dark-40/50 dark:text-[#FBFBFB]/50 text-base">
            هر فرد
          </span>
        </div>
        <div className="text-white dark:text-black bg-primary cursor-pointer rounded-full p-3">
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      </div>
      {off > 0 && (
        <div
          className="absolute -top-8 -right-3 w-21 h-21 flex flex-col text-white items-center justify-center"
          style={{ backgroundImage: 'url("/vector.png")' }}
        >
          <span className="font-bold text-xl">{off}%</span>
          <span className="text-sm">تخفیف</span>
        </div>
      )}
    </div>
  );
};

export default Card;
