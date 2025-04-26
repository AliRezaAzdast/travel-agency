import React from "react";

const CommentCard = ({username, userid, img, date}) => {
  return (
    <div className="flex flex-col border dark:border-[#FBFBFB]/25 border-dark-40/25 dark:bg-[#1D1D1D] bg-white p-5 rounded-4xl">
      <div className="flex items-center gap-1">
        <img
          src={img}
          className="w-[30px] h-[30px] rounded-full"
          alt=""
        />
        <div className="flex flex-col">
          <span className="font-bold text-sm text-primary">{username}</span>
          <span className="text-sm text-[#3c3c43]/50 dark:text-[#BFBFBF]/50">{userid}</span>
        </div>
      </div>
      <p className="text-lg text-black/60 font-medium mt-4 dark:text-[#FBFBFB]/60">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد
      </p>
      <div className="flex justify-between mt-4">
        <span className="text-[#3c3c43]/50 dark:text-[#BFBFBF]/50 text-sm">{date}</span>
        <div className="flex gap-3 items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 11.4296L4 18.4296M7.5 11.017V17.5724C7.5 18.677 8.39543 19.5724 9.5 19.5724H17.3902C18.3301 19.5724 19.1432 18.918 19.344 17.9998L20.7345 11.6433C20.8709 11.0196 20.396 10.4296 19.7576 10.4296H16C14.8954 10.4296 14 9.53413 14 8.42956V7.04686C14 6.01132 13.5886 5.0182 12.8564 4.28596C12.4161 3.84569 11.6818 3.92459 11.3451 4.44834L7.81764 9.93545C7.61026 10.258 7.5 10.6335 7.5 11.017Z"
              stroke="#9D9DA1"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 11.4296L20 18.4296M16.5 11.017V17.5724C16.5 18.677 15.6046 19.5724 14.5 19.5724H6.60979C5.66991 19.5724 4.85684 18.918 4.65599 17.9998L3.2655 11.6433C3.12907 11.0196 3.60401 10.4296 4.2424 10.4296H8C9.10457 10.4296 10 9.53413 10 8.42956V7.04686C10 6.01132 10.4114 5.0182 11.1436 4.28596C11.5839 3.84569 12.3182 3.92459 12.6549 4.44834L16.1824 9.93545C16.3897 10.258 16.5 10.6335 16.5 11.017Z"
              stroke="#9D9DA1"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
