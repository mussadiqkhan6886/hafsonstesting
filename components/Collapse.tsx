"use client";
import { useState } from "react";
import {FaPlus} from "react-icons/fa"

export default function CollapseSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Who we are",
      content:
        "We love what we do and it shows. With more than 25 years of experience in the field, we know our industry like the back of our hands. There’s no challenge too big or too small and we dedicate our utmost energy to every project we take on."
    },
    {
      title: "Strategies and Plan",
      content:
        "Every customer is unique. That’s why we customise every one of our plans to fit your needs exactly. Whether it’s a small strategy or a comprehensive effort, we’ll sit down with you, listen to your requests and prepare a customised plan."
    }
  ];

  return (
    <div className="space-y-4 mt-5">
      {items.map((item, i) => (
        <div key={i} className="border-b border-black/20 rounded-lg overflow-hidden">
          <h5
            onClick={() => toggle(i)}
            className="cursor-pointer px-4 py-3 font-semibold text-gray-800 transition"
          >
            <FaPlus className="inline-block mr-2 pb-1" /> {item.title}
          </h5>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden px-4 ${
              openIndex === i ? "max-h-96 py-2" : "max-h-0"
            }`}
          >
            <p className="text-gray-600 text-sm font-[400]">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
