// components/Types.tsx
import React from "react";
import TypesCard from "./sub/TypesCard";
import { FaBatteryFull, FaSolarPanel } from "react-icons/fa";
import { MdOutlineElectricalServices } from "react-icons/md";
import { RiHomeGearFill } from "react-icons/ri";

const Types = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 text-center">
      {/* Section Header */}
      <p className="text-lg font-medium text-gray-500">Our Products</p>
      <h1 className="text-3xl md:text-4xl font-bold text-[#023F5E] py-3">
        Which inverter is right for me?
      </h1>
      <p className="m-auto max-w-2xl text-gray-700">
        Do you need help choosing the perfect inverter? Look no further than{" "}
        <span className="font-semibold text-[#023F5E]">Luminous</span>, Nigeria&apos;s
        no.1 inverters. Before you choose, analyze your power needs—we&apos;re
        here to guide you with all the information you need.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-14 max-w-6xl mx-auto">
        <TypesCard
          icon={<RiHomeGearFill />}
          link="/products/low-capacity"
          heading="Low Capacity Inverters"
          text="Ideal for homes & small offices with basic power needs. Compact, efficient, and cost-effective."
        />
        <TypesCard
          icon={<MdOutlineElectricalServices />}
          link="/products/high-capacity"
          heading="High Capacity Inverters"
          text="Perfect for industries, hospitals, and commercial setups. Reliable backup for heavy usage."
        />
        <TypesCard
          icon={<FaBatteryFull />}
          link="/products/batteries"
          heading="Batteries"
          text="At the heart of any inverter system—long-lasting batteries ensure consistent performance."
        />
        <TypesCard
          icon={<FaSolarPanel />}
          link="/products/solar-panels"
          heading="Solar Panels"
          text="Harness clean, renewable solar energy to power your home or business sustainably."
        />
      </div>
    </section>
  );
};

export default Types;
