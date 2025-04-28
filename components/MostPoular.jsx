import React from "react";
import { mostp } from "../data/data";
import Card from "./Card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MostPoular = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      gsap.from(".mp-text", {
        scrollTrigger: {
          trigger: ".mp-text",
          start: "top 80%",
          end: "bottom top",
        },
        x: 600,
        opacity: 0,
        duration: 1,
      });

      gsap.from(".mp-button", {
        scrollTrigger: {
          trigger: ".mp-button",
          start: "top 80%",
          end: "bottom top",
        },
        x: -600,
        opacity: 0,
        duration: 1,
      });

      gsap.from(".card-items", {
        scrollTrigger: {
          trigger: ".card-items",
          start: "top 80%",
          end: "bottom top",
        },
        x: -600,
        stagger:.5,
        opacity: 0,
        duration: 1,
      });

      gsap.from(".mp-arrow", {
        scrollTrigger: {
          trigger: ".mp-arrow",
          start: "top 80%",
          end: "bottom top",
        },
        y: -600,
        stagger:.5,
        opacity: 0,
        duration: 1,
      });


    },
    { scope: "#mostpopular" }
  );

  return (
    <section id="mostpopular" className="mt-20">
      <div className="flex flex-col my-container my-text">
        {/* title */}
        <div className="flex justify-between items-center">
          <div className="mp-text flex gap-1 items-center">
            <h1 className="text-[32px] relative font-bold tracking-tight my-title-after">
              محبوب ترین مکان ها
            </h1>
            <img src="/img/icons/tower.png" className="h-9 w-9" alt="" />
          </div>
          <div>
            <button className="mp-button bg-[#EAEAEA] text-[#404040] rounded-full p-3 font-semibold cursor-pointer">
              دیدن همه
            </button>
          </div>
        </div>
        {/* carts */}
      </div>
      <div className="flex flex-wrap gap-2 items-center justify-center my-container">
        {mostp.map((item) => (
          <Card className='card-items' key={item.id} {...item} />
        ))}
      </div>

      {/* arrow */}
      <div className="mp-arrow w-full mt-8 flex justify-center">
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
    </section>
  );
};

export default MostPoular;
