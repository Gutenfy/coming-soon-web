"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import IFAQItemProps from "./accordion-item.interface";

const FAQItem: React.FC<IFAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border-t border-gray-300 pt-4 mb-4 hover:cursor-pointer "
      onClick={() => setIsOpen(!isOpen)}
    >
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        style={{ paddingRight: "10px" }}
      >
        <h3 className="text-lg font-medium mr-2">{question}</h3>{" "}
        <IoIosArrowDown
          className={`transition-transform duration-500 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          size={24}
        />
      </button>
      <div
        className={`overflow-hidden transition-all ease-linear duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
        style={{ maxWidth: "768px" }}
      >
        <p className="mt-2 text-gray-600 p-4">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
