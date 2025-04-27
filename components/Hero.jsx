import React,{useRef} from "react";
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";


const Hero = () => {

  const imageRef = useRef(null)
  const borderRef = useRef(null)

  useGSAP(() => {

    gsap.from(imageRef.current, {
      x:-600,
      opacity:0,
      duration:3,
      ease: 'power1'
    })

    gsap.from(borderRef.current, {
      x: 600,
      duration:3,
      opacity:0,
      ease: 'power1'
    })

    gsap.from('.aa', {
      y: -600,
      duration:2,
      opacity:0,
      stagger: 1,
      ease: 'power1'
    })
  },{})


  return (
    <section className="my-container mt-3 relative">
      <div className="flex lg:flex-row flex-col items-center justify-between my-text">
        {/* right */}
        <div  className="flex-1/2 flex flex-col justify-center gap-15">
         {/* orange part */}
          <div className="aa bg-secondary/25 border border-secondary w-fit flex items-center gap-3 p-3 rounded-full">
            <img src="/img/icons/beach-sunrise.png" alt="" />
            <span className="lg:text-sm text-xs text-secondary">
              بسیار سفر باید تا پخته شود خامی
            </span>
          </div>
          {/* big header */}
          <div>
            <h1 className="aa lg:text-7xl text-4xl font-bold text-center lg:text-start lg:w-[527px]">
              دنیا را کشف کنید زندگی را
              <span className=" text-primary">تجربه </span>
              کنید
              <span className="inline-block align-middle ml-2">
                <img
                  src="/img/icons/travelling 1.png"
                  alt=""
                  className="lg:w-15 w-9 lg:h-15 h-9 inline-block"
                />
              </span>
            </h1>
          </div>
          {/* icon texts */}
          <div className="aa flex items-center justify-center mb-5 lg:justify-start gap-5">
            <div className="flex flex-col items-center">
              <img
                src="./img/icons/camp.png"
                className="p-3 bg-white dark:bg-dark-background border border-[#404040]/25 dark:border-white/25 rounded-2xl"
                alt=""
              />
              <span className="font-semibold">کمپ</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="./img/icons/beach.png"
                className="p-3 bg-white dark:bg-dark-background border border-[#404040]/25 dark:border-white/25 rounded-2xl"
                alt=""
              />
              <span className="font-semibold">ساحل</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="./img/icons/night-citys.png"
                className="p-3 bg-white dark:bg-dark-background border border-[#404040]/25 dark:border-white/25 rounded-2xl"
                alt=""
              />
              <span className="font-semibold">شهر</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="./img/icons/mountain.png"
                className="p-3 bg-white dark:bg-dark-background border border-[#404040]/25 dark:border-white/25 rounded-2xl"
                alt=""
              />
              <span className="font-semibold">جنگل</span>
            </div>
          </div>
        </div>
        {/* left */}
        <div ref={imageRef} className="lg:w-[636px] w-full lg:h-[811px] h-[300px] rounded-4xl bg-bottom bg-cover relative" style={{ backgroundImage: 'url("/img/1.png")' }}>
          <div className="flex flex-col gap-5 items-center absolute left-8 top-8">
            <div className="flex flex-col gap-3 bg-white/25 p-8 border border-white rounded-4xl">
              <span className="flex items-center text-white font-bold gap-1">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9999 14.6699C9.86988 14.6699 8.12988 12.9399 8.12988 10.7999C8.12988 8.65994 9.86988 6.93994 11.9999 6.93994C14.1299 6.93994 15.8699 8.66994 15.8699 10.8099C15.8699 12.9499 14.1299 14.6699 11.9999 14.6699ZM11.9999 8.43994C10.6999 8.43994 9.62988 9.49994 9.62988 10.8099C9.62988 12.1199 10.6899 13.1799 11.9999 13.1799C13.3099 13.1799 14.3699 12.1199 14.3699 10.8099C14.3699 9.49994 13.2999 8.43994 11.9999 8.43994Z"
                    fill="white"
                  />
                  <path
                    d="M11.9997 23.26C10.5197 23.26 9.02969 22.7 7.86969 21.59C4.91969 18.75 1.65969 14.22 2.88969 8.83C3.99969 3.94 8.26969 1.75 11.9997 1.75C11.9997 1.75 11.9997 1.75 12.0097 1.75C15.7397 1.75 20.0097 3.94 21.1197 8.84C22.3397 14.23 19.0797 18.75 16.1297 21.59C14.9697 22.7 13.4797 23.26 11.9997 23.26ZM11.9997 3.25C9.08969 3.25 5.34969 4.8 4.35969 9.16C3.27969 13.87 6.23969 17.93 8.91969 20.5C10.6497 22.17 13.3597 22.17 15.0897 20.5C17.7597 17.93 20.7197 13.87 19.6597 9.16C18.6597 4.8 14.9097 3.25 11.9997 3.25Z"
                    fill="white"
                  />
                </svg>
                تایلند
              </span>
              <span className="text-white text-7xl font-bold">پاتایا</span>
            </div>
            <div className="flex gap-3 items-center">
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.5559 35.7876C27.1996 35.7876 26.8434 35.6563 26.5621 35.3751C26.0184 34.8313 26.0184 33.9313 26.5621 33.3876L36.9496 23.0001L26.5621 12.6126C26.0184 12.0688 26.0184 11.1688 26.5621 10.6251C27.1059 10.0813 28.0059 10.0813 28.5496 10.6251L39.9309 22.0063C40.4746 22.5501 40.4746 23.4501 39.9309 23.9938L28.5496 35.3751C28.2684 35.6563 27.9121 35.7876 27.5559 35.7876Z"
                  fill="white"
                />
                <path
                  d="M38.6188 24.4062H7.0625C6.29375 24.4062 5.65625 23.7687 5.65625 23C5.65625 22.2312 6.29375 21.5938 7.0625 21.5938H38.6188C39.3875 21.5938 40.025 22.2312 40.025 23C40.025 23.7687 39.3875 24.4062 38.6188 24.4062Z"
                  fill="white"
                />
              </svg>
              <span className="text-white text-5xl font-bold">۰۱</span>
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.4441 10.2124C18.8004 10.2124 19.1566 10.3437 19.4379 10.6249C19.9816 11.1687 19.9816 12.0687 19.4379 12.6124L9.05039 22.9999L19.4379 33.3874C19.9816 33.9312 19.9816 34.8312 19.4379 35.3749C18.8941 35.9187 17.9941 35.9187 17.4504 35.3749L6.06914 23.9937C5.52539 23.4499 5.52539 22.5499 6.06914 22.0062L17.4504 10.6249C17.7316 10.3437 18.0879 10.2124 18.4441 10.2124Z"
                  fill="white"
                />
                <path
                  d="M7.38125 21.5937L38.9375 21.5937C39.7063 21.5937 40.3438 22.2313 40.3438 23C40.3438 23.7688 39.7062 24.4062 38.9375 24.4062L7.38125 24.4062C6.6125 24.4062 5.975 23.7687 5.975 23C5.975 22.2312 6.6125 21.5937 7.38125 21.5937Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* border wiht seach */}
      <div ref={borderRef} className=" rounded-4xl lg:rounded-full w-full lg:w-250 lg:absolute mt-8 mx-auto lg:bottom-8 bg-white p-4 dark:bg-dark-background dark:border-white/35 border border-[#404040]/35">
        <ul className="flex lg:flex-row flex-col text-xl gap-6 justify-evenly items-center">
          <li className="flex items-center gap-1 my-text">
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
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            <span>مقصد خود را انتخاب کنید</span>
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
            </svg>
          </li>
          <li className="flex items-center gap-1 my-text">
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
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>
            <span>تاریخ ورود</span>
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
            </svg>
          </li>
          <li className="flex items-center gap-1 my-text">
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
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>
            <span>تاریخ خروج</span>
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
            </svg>
          </li>
          <li className="flex items-center gap-1 my-text">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              stroke="currentColor"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0176 14.5C14.779 14.5 17.0176 12.2614 17.0176 9.5C17.0176 6.73858 14.779 4.5 12.0176 4.5C9.25615 4.5 7.01758 6.73858 7.01758 9.5C7.01758 12.2614 9.25615 14.5 12.0176 14.5ZM12.0176 14.5C7.5993 14.5 4.01758 17.1863 4.01758 20.5M12.0176 14.5C16.4359 14.5 20.0176 17.1863 20.0176 20.5"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>

            <span>تعداد</span>
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
            </svg>
          </li>
          <li>
            <button className="bg-primary rounded-full text-white text-xl font-semibold px-10 py-3">جستجو</button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
