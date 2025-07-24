import { useState } from "react";

export default function AccordionItem({ title, content, className }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`my-text border-b border-gray-300 ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left rounded-t-3xl hover:bg-gray-100 dark:hover:bg-[#40404040]"
      >
        <span className="font-medium">{title}</span>
        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor" 
          className={`${isOpen ? 'rotate-180' : ''} text-dark-40 dark:text-white`}
        >
          <path
            d="M13 1.20703L7.70711 6.49993C7.31658 6.89045 6.68342 6.89045 6.29289 6.49992L1 1.20703"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 text-sm bg-gray-50 dark:bg-dark-40 rounded-b-3xl">{content}</div>
      )}
    </div>
  );
}
