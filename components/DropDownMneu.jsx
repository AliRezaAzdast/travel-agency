import React from "react";

function DropDownMneu({ animationClass, menuItems, menuTitle, svgItem }) {
  return (
    <li className={`${animationClass} relative group my-text`}>
      <a
        href="#"
        className="flex items-center gap-1 group-hover:text-primary transition-colors"
      >
        {svgItem && <span className="mr-2">{svgItem}</span>}
        <span>{menuTitle}</span>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          stroke="currentColor"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.0537 10.5L12.7608 15.7929C12.3703 16.1834 11.7371 16.1834 11.3466 15.7929L6.05371 10.5"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </a>
      <div
        className="absolute top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible w-35 p-6 space-y-4 bg-white dark:bg-light border-t-[3px] text-base shadow-normal border-primary
          transition-all *:block *:transition-colors *:hover:text-primary delay-75 rounded-2xl"
      >
        {menuItems.map((item, index) => (
          <a key={index} href={item.href}>{item.title}</a>
        ))}
      </div>
    </li>
  );
}

export default DropDownMneu;
