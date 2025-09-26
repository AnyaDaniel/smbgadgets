// components/Usage.tsx
import React from "react";
import UsageCards from "./sub/UsageCards";

const Usage = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#023F5E] tracking-tight">
          WHERE TO USE
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Our products are trusted globally, exported to{" "}
          <span className="font-semibold text-[#023F5E]">100+ countries</span>,
          and used across diverse industries.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-14 place-items-center">
          <UsageCards link="" text="Homes & Estates" img="/house.png" />
          <UsageCards link="" text="Offices" img="/office-building.png" />
          <UsageCards link="" text="Industry" img="/factory.png" />
          <UsageCards link="" text="Medical" img="/medical-symbol.png" />
          <UsageCards link="" text="Telcom" img="/telecommunications.png" />
          <UsageCards link="" text="Data Center & Servers" img="/servers.png" />
        </div>
      </div>
    </section>
  );
};

export default Usage;
