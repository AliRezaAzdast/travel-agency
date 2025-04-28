import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const WhyUs = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      gsap.from(".wu-text", {
        scrollTrigger: {
          trigger: ".wu-text",
          start: "top 80%",
          end: "bottom top",
        },
        x: 600,
        opacity: 0,
        duration: 1,
      });

      gsap.from(".wu-card", {
        scrollTrigger: {
          trigger: ".wu-card",
          start: "top 80%",
          end: "bottom top",
        },
        opacity: 0,
        stagger:.5,
        x: -600,
        duration: 1,
      });

      
    },
    { scope: "#whyus" }
  );

  
  return (
    <section id="whyus" className="mt-20">
      <div className="my-container">
        <div
          className="w-full lg:h-130 h-auto my-text"
          style={{ backgroundImage: "url(./img/Frame.png" }}
        >
          {/* title */}
          <div className=" flex justify-between items-center">
            <div className="wu-text flex gap-1 items-center">
              <h1 className="text-[32px] relative font-bold tracking-tight my-title-after">
                چرا سفر کن
              </h1>
              <img
                src="/img/icons/red-question-mark.png"
                className="h-9 w-9"
                alt=""
              />
            </div>
          </div>
          {/* body */}
          <div className="mt-8 bg-primary flex lg:flex-row flex-col items-center gap-6 dark:border dark:border-[#FBFBFB]/25 dark:bg-[#1D1D1D] justify-between p-10 rounded-4xl">
            <div className="wu-card bg-[#7D8BFF] dark:bg-[#4A4A4A] flex flex-col w-[365px] items-center gap-y-5 relative rounded-4xl p-5 after:bg-[#7D8BFF] dark:after:bg-[#4A4A4A] after:rounded-full after:w-20 after:h-20 after:absolute after:-top-3 after:left-[42%]">
              <img
                src="./img/icons/whytravel/clock.png"
                className="w-14 h-14 bg-primary dark:bg-[#1E1E1E] p-2 rounded-full z-10"
                alt=""
              />
              <h4 className="text-white text-[28px] font-semibold text-center">
                پشتیبانی 24 ساعته
              </h4>
              <p className="text-white text-lg text-center w-[240px]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.{" "}
              </p>
            </div>
            <div className="wu-card bg-[#7D8BFF] dark:bg-[#4A4A4A] flex flex-col w-[365px] items-center gap-y-5 relative rounded-4xl p-5 after:bg-[#7D8BFF] dark:after:bg-[#4A4A4A] after:rounded-full after:w-20 after:h-20 after:absolute after:-top-3 after:left-[42%]">
              <img
                src="./img/icons/whytravel/dollar.png"
                className="w-14 h-14 bg-primary dark:bg-[#1E1E1E] p-2 rounded-full z-10"
                alt=""
              />
              <h4 className="text-white text-[28px] font-semibold text-center ">
                پشتیبانی 24 ساعته
              </h4>
              <p className="text-white text-lg text-center w-[240px]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.{" "}
              </p>
            </div>
            <div className="wu-card bg-[#7D8BFF] dark:bg-[#4A4A4A] flex flex-col w-[365px] items-center gap-y-5 relative rounded-4xl p-5 after:bg-[#7D8BFF] dark:after:bg-[#4A4A4A] after:rounded-full after:w-20 after:h-20 after:absolute after:-top-3 after:left-[42%]">
              <img
                src="./img/icons/whytravel/plain-white.png"
                className="w-14 h-14 bg-primary dark:bg-[#1E1E1E] p-2 rounded-full z-10"
                alt=""
              />
              <h4 className="text-white text-[28px] font-semibold text-center ">
                پشتیبانی 24 ساعته
              </h4>
              <p className="text-white text-lg text-center w-[240px]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
