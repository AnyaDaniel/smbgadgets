"use client";
import React from "react";
import FAQ from "../components/faq";
import Workflow from "../components/workflow";
import Solutions from "../components/Solutions";

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-background-dark dark:text-background-light">
      <div className="flex pt-12 flex-col">

        {/* Main Content */}
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold md:text-5xl">
                  Our Solar Solutions
                </h2>
                <p className="mt-4 text-base text-background-dark/70 dark:text-background-light/70">
                  At Solar Solutions Inc., we offer a range of solar energy
                  solutions tailored to meet the unique needs of our clients.
                  Whether you're a homeowner, business owner, or industrial
                  facility manager, we have the expertise and technology to help
                  you harness the power of the sun.
                </p>
              </div>
            </div>
          </section>

         
<Solutions/>
      
<Workflow/>

    <FAQ />

      </main>
      
      </div>
    </div>
  );
}
