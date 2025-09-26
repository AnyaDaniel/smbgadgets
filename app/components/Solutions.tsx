import React from "react";

interface CardProps {
  title: string;
  desc: string;
  img: string;
}

interface SectionProps {
  id: string;
  title: string;
  desc: string;
  cards: CardProps[];
  reverse?: boolean; // for alternating layout
}

const SolutionSection = ({ id, title, desc, cards, reverse }: SectionProps) => {
  return (
    <section
      id={id}
      className="py-16 md:py-24 bg-background-light/50 dark:bg-background-dark/50"
    >
      <div className="container mx-auto px-4">
        <div
          className={`grid items-center gap-12 md:grid-cols-2 ${
            reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Text */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold md:text-3xl">{title}</h3>
            <p className="text-base text-background-dark/70 dark:text-background-light/70">
              {desc}
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
            {cards.map((card, i) => (
              <div key={i} className="space-y-3">
                <div
                  className="w-full aspect-square rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url("${card.img}")` }}
                ></div>
                <div>
                  <h4 className="font-bold">{card.title}</h4>
                  <p className="text-sm text-background-dark/70 dark:text-background-light/70">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ------------------ Example Usage ------------------ //

const sections: SectionProps[] = [
  {
    id: "residential",
    title: "Residential Solar",
    desc: "Transform your home into an energy-efficient haven with our residential solar solutions...",
    cards: [
      {
        title: "Customized Design",
        desc: "Tailored to your home's unique energy needs.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDHiD9AU0Dl5wZJSc-ui_0n6E9zkrByl4OTIcPxi8bAcidugegRMm6dfd1KUMz01aJtRLysmbYR0D47NgA4lx3FK3a61VbYcriCFxQufgnD1ZaZBbGvJ6JlxcfymQa0jufgF2xcIXy3d9MQdynkjHivp9safKvConsOZbRdK74iLWOhzH9Jay-iS-Jxca2FPCiGDjQjFLZiKmWI8pZWZvHVnHAl5op1izkyQxcjTl3oQN7HjmC-7pDlbUkfTA_6M2TwzE4caBqtnc",
      },
      {
        title: "Professional Installation",
        desc: "Seamless and efficient process by certified installers.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuj_QNJTcvFZYK4lhf6cdHzzYvFL8YP0MuHbin1efc1Me_ld_IVIHdWRFCCptmQWlnBBo7WkhgUPY0ni7qoJRPxQzMWSc6y_yiEswj0KuvcRilwqyXAlosit9UZV4-RV_PmLjB1WW_MoBkJORmUhqUFGRW1l5gSDJoFNyhiMhnC3NKnwKZJIGTpZxuCoig8_28BsQVxxESxu9RIppKhKVaM-TKK5UL6o96a5GZq2IV0VboSJDdlmFjPbNHiRKxT3QAoQRhSO07b_k",
      },
      {
        title: "Ongoing Support",
        desc: "Comprehensive maintenance to keep your system optimal.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDT00sLHGkcJnlHh_tAl4AmMrnQzTTNRvMDdrm1TRC3Qual2_a7J353bDBVscispSsVYwufYJtI3bsgyu75hJJkxzdjz5w0M-CucPTM-vpinA8Hdd4I46VwhBuyxhJVywtXrp-b8zKM_fRVz5P1Q2ByuEkmTejA3cWOJHaDFiYRKeMoCgO4i6Q70drHYKLU9BANdD0B9PZZWPLqwgv2Yob2BMmA8Gvpx1BRVZEfM51v2JgBdwGurcJRPUgQPqV525OS-tkgOoLrucM",
      },
    ],
  },
  {
    id: "commercial",
    title: "Commercial Solar",
    desc: "Empower your business with clean, renewable energy...",
    reverse: true,
    cards: [
      {
        title: "Scalable Systems",
        desc: "Designed to grow with your business needs.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAObARZdiFfoiyzVD4vkpUjjOBkqfNaTg416qr10w9Na_md21QTaA9HDqd7ThGeDfjC-tzVbX3XnW8RlSoRM8lsbkviMXt2JWIs7x4_cN_k3lmeI5yVJtVmkcmP9NNOoKOZ8kdNdBpp58Kq2VS9Fd7GI2P2cHAAKVXmZ9fJV9XG6oiEUTBjgD8087yhtmyRtLwJZT12MpEUwnzRqjr_lyWrKZOosy4a0cLtcDUDfbQWYy40RO3u2Dzz5IhK0IaUHjCjDsUuxqc9wbQ",
      },
      {
        title: "Energy Audits",
        desc: "Identify savings and maximize your investment.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMIGtK5D1WccFBApoePXNzMU9a0UJ4z01tu7eqgdzEhdb8MtPsoPSw80-4EkmVfW2sJt8SGvREW0RRHmH1IGjexndpp2xy7FdCvBpmjOtzjn3n3cT-4OWpgOWoBiMxhh5bYB4OMNpGepxf2DAkZAldFAmJu4cHypHR88EYsnxCa_Ojtqol9O-fSosvjyDHmTNDejbgkbSXj_MH4zKgxDhTnsQ6tq4QmhbqmSlWoB9n1R6CokU30hS1V2W2bzdH4l1xPTm4rNZpkQU",
      },
      {
        title: "Financial Incentives",
        desc: "We help you navigate rebates to make solar affordable.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6x2R0SaLiJGaRhFKizzm-jGVkSoMKlX5CYa8afSi8M09XOKzXCahg6vXVYagUmqIG63ZYAV15V4L9BQ14ia7exZQucp1Pmgmag-G_t5L0z7KlqdNTiK833JajhNiEDnLk0jCVwYxlUwpsI3FV87ENHW2x15ce2kRG1i75CVFEPwtvTFRO9a5KO27Q58PVjCJk6CKggAzlMIFQ8agKQlfRcgRdHeyBW3J1Wiwe666jlbblyTcHLaF529CzQqDgsJwAwzgU4Wx7g4c",
      },
    ],
  },
  {
    id: "industrial",
    title: "Industrial Solar",
    desc: "Optimize your industrial operations with our robust solar solutions...",
    cards: [
      {
        title: "High-Capacity Arrays",
        desc: "Meeting the energy needs of large facilities.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoZoeWWA-TFKLKy9lRx18FR_pFYuUxi3_bah5ET8vHJc7RVCC56yDpQVQj-pvEj4ZezmOeIx9y4-1Kp0FEcK5rMyc4KM06_KkzfxF5S1oizNPIerxAMctPfYmhNnGGpQBteCTwCxWDEbEEklX6VCl887n1bjwYYvFG1pVxG54dwQc4BEN1gSIOtOxftnIfrJV4-2pnL-MFz3iLowUnmWaMQao-PIWTh3EqewwL0cNhZ0gi4PyRpnq9kR8UaToT_qhTIKzrLJdg2Ng",
      },
      {
        title: "Energy Storage",
        desc: "Maximize utilization and provide backup power.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzka2gVhM_uJWpY-IA2ZSP_CDmk5UfYgoZwA_BM5vwHJUrqHEnkh1HOgbsciUqnKXgY_oNzb4i2zJCsClBcyIz10LVvbNa4KxSeteFOgtOTA3zZF6XFzBLWpNVngRbkRjUnp4CJwUx7oY5G75GRgRkNN0UYvvRl8vDo46txWhiXVVINeKffk7q-ikye69_vPEqMx35U0WVrtgIFQWqqFPnOwIxh8aLYWhZEx9Q4CXaCqAve2T87thfNuyOyr0V1IjcVUPn-PqlHE",
      },
      {
        title: "Remote Monitoring",
        desc: "Track production and optimize performance.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuArC2nkxiiRupCj27IaxwkQFB7UTO9Z_ASGiN0-debi70qw8HXbUTXIo4xSRtWKjzNxMITxkA0NJcztEQ3k9NPLae1gzR8ygL6LnjG0aJfbjtrYj8bHDEakpBacDFnUAe0PECUDhSmkgv9LHDgPFZMANByiSaH-c38_dmxs1rHmS2YPl071kFA_sV8DLXoRVIkjsJ30jy1oeyt97QvJj1OsCDo3yl7xi-7xx9pv0LbFsqkYKeyBD1xGHT9kzO0fYWrRS-A76ZZvzFA",
      },
    ],
  },
];

const Solutions = () => {
  return (
    <>
      {sections.map((section) => (
        <SolutionSection key={section.id} {...section} />
      ))}
    </>
  );
};

export default Solutions;
