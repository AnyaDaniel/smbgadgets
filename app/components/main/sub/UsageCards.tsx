// components/sub/UsageCards.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface UsageCardsProps {
  link: string;
  text: string;
  img: string;
}

const UsageCards = ({ link, text, img }: UsageCardsProps) => {
  return (
    <Link
      href={link}
      className="group relative rounded-2xl w-[220px] h-[180px] bg-white/20 backdrop-blur-md border border-white/40 shadow-lg p-5 flex flex-col justify-between overflow-hidden hover:scale-105 transition-all duration-300"
    >
      <p className="font-semibold text-lg text-gray-800 text-right group-hover:text-[#023F5E] transition-colors">
        {text}
      </p>
      <div className="absolute bottom-4 left-4 transform group-hover:translate-x-2 transition-transform duration-300">
        <Image
          src={img}
          alt={text}
          width={90}
          height={90}
          className="drop-shadow-md"
        />
      </div>
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#023F5E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </Link>
  );
};

export default UsageCards;
