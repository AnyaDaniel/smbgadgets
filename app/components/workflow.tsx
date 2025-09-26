import React from "react";

const Workflow = () => {
  const steps = [
    {
      id: 1,
      title: "Consultation",
      desc: "Initial assessment of your energy needs and site suitability.",
    },
    {
      id: 2,
      title: "Design & Proposal",
      desc: "Custom system design and a detailed proposal with cost and savings.",
    },
    {
      id: 3,
      title: "Installation",
      desc: "Professional installation by our certified and experienced technicians.",
    },
    {
      id: 4,
      title: "Activation & Monitoring",
      desc: "System activation, final inspection, and setting up monitoring.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#f9fafb] to-[#eef3f8]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#023F5E]">
            Our Workflow
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            From consultation to monitoring, we ensure a smooth and professional
            process tailored to your needs.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative text-center p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Step Number */}
              <div className="flex items-center justify-center h-16 w-16 mx-auto rounded-full bg-[#023F5E]/10 text-[#023F5E] mb-6 shadow-sm">
                <span className="text-2xl font-bold">{step.id}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
