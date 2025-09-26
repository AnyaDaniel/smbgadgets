// components/sub/TypesCard.tsx
import Link from "next/link";
import React from "react";

export interface TypesCardProps {
  icon: React.ReactNode;
  heading: string;
  text: string;
  link: string;
}

const TypesCard = ({ icon, heading, text, link }: TypesCardProps) => {
  return (
    <Link
      href={link}
      className="group p-6 rounded-2xl shadow-lg bg-white border border-gray-200 
                 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 
                 h-full flex flex-col items-center text-center"
    >
      {/* Icon */}
      <div className="w-20 h-20 flex items-center justify-center rounded-xl transition-all text-[#023F5E] text-4xl">
        {icon}
      </div>

      {/* Text Content */}
      <div className="pt-6 flex flex-col flex-grow">
        <h1 className="text-xl font-semibold text-[#023F5E] group-hover:text-[#0088cc] transition-colors">
          {heading}
        </h1>
        <p className="text-[15px] text-gray-600 mt-3 leading-relaxed max-w-[260px] mx-auto">
          {text}
        </p>
      </div>
    </Link>
  );
};

export default TypesCard;
