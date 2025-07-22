import { useState } from "react";

export default function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-100"
      >
        <span className="font-medium">{title}</span>
        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${isOpen ? 'rotate-180' : ''}`}
        >
          <path
            d="M13 1.20703L7.70711 6.49993C7.31658 6.89045 6.68342 6.89045 6.29289 6.49992L1 1.20703"
            stroke="#404040"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 text-sm text-gray-600 bg-gray-50">{content}</div>
      )}
    </div>
  );
}
