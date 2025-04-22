import React from "react";
import {mostp} from '../data/data'
import Card from './Card'

const MostPoular = () => {
  
  return (
    <section>
      <div className="flex flex-col my-container my-text mt-20">
        {/* title */}
        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <h1 className="text-[32px] relative font-bold tracking-tight my-title-after">
              محبوب ترین مکان ها
            </h1>
            <img src="/img/icons/tower.png" className="h-9 w-9" alt="" />
          </div>
          <div>
            <button className="bg-[#EAEAEA] text-[#404040] rounded-full p-3 font-semibold cursor-pointer">دیدن همه</button>
          </div>
        </div>
        {/* carts */}
      </div>
      <div className="flex flex-wrap gap-2 items-center justify-center my-container">
        {mostp.map(item => (
          <Card key={item.id} {...item}/>
        ))}
      </div>
    </section>
  );
};

export default MostPoular;
