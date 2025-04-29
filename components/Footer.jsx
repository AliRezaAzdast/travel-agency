import React from "react";
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Footer = () => {
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.from('.f-ul', {
      scrollTrigger: {
        trigger: '.f-ul',
        start: "top bottom",
        end: "bottom top",
      },
      stagger:.5,
      x: -600,
      opacity:0,
      duration:1,
    });

    gsap.from('.f-logo', {
      scrollTrigger: {
        trigger: '.f-logo',
        start: "top bottom",
        end: "bottom top",
      },
      x: 600,
      opacity:0,
      duration:2,
    });

    gsap.from('.f-text', {
      scrollTrigger: {
        trigger: '.f-text',
        start: "top bottom",
        end: "bottom top",
      },
      y: -600,
      opacity:0,
      duration:2,
    });
  })
  return (
    <footer id="footer" className="mt-20 bg-[#232323] ">
      <div className="my-container pt-8">
        <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-y-5 sm:gap-y-0 items-start border-b pb-7 border-[#ffffff]">
          <ul className="flex gap-5 *:border-l *:pl-6 *:border-[#ffffff]/50">
            <li className="f-ul">
              <a href="" className="text-[#ffffff] font-medium">
                صفحه اصلی
              </a>
            </li>
            <li className="f-ul">
              <a href="" className="text-[#ffffff] font-medium">
                درباره ما
              </a>
            </li>
            <li className="f-ul">
              <a href="" className="text-[#ffffff] font-medium">
                تماس
              </a>
            </li>
          </ul>
          <div className="f-logo">
            <a href="#" className="flex items-center">
              <img src="/logo.png" alt="" className="w-8 h-8" />
              <span className="text-2xl font-bold text-white">سفرکن</span>
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center mt-7 pb-7">
          <p className="f-text text-[#ffffff] text-sm font-medium">
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
