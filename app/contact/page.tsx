"use client";

import React from "react";

export default function ContactPage() {
  return (
    <div className="bg-background-light pt-12 dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 min-h-screen flex flex-col">

      {/* Main */}
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-16"> 
            {/* Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  We&apos;re here to help you with your solar energy needs. Reach out
                  to us using the form below or contact us directly.
                </p>
              </div>

              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    className="w-full bg-background-light dark:bg-background-dark border-gray-500 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary transition"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full bg-background-light dark:bg-background-dark border-gray-500 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary transition"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Your Phone"
                    className="w-full bg-background-light dark:bg-background-dark border-gray-300 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary transition"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    placeholder="Your Message"
                    className="w-full bg-background-light dark:bg-background-dark border-gray-300 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary transition"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex text-white items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-bold hover:bg-primary/90 transition-colors"
                  >
                    Submit Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info + Map */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    <strong className="font-medium text-gray-800 dark:text-gray-200">
                      Phone:
                    </strong>{" "}
                    (555) 123-4567
                  </p>
                  <p>
                    <strong className="font-medium text-gray-800 dark:text-gray-200">
                      Email:
                    </strong>{" "}
                    info@solarsolutions.com
                  </p>
                  <p>
                    <strong className="font-medium text-gray-800 dark:text-gray-200">
                      Address:
                    </strong>{" "}
                    Suit 301, Kings Plaza, Opposite NAF confrence center, Abuja, Nigeria
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Location
                </h3>
                {/* <div className="aspect-video">
                  <div
                    className="w-full h-full bg-center bg-no-repeat bg-cover rounded-lg"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAuegy9Ojp5g7Lylx9VP8x7BradVUaBFJfUATozMtK17R2xEbkmEqSqkaprzQV9isvY6lVOSkafQlW21lMuadweeSlaTyWarjR2re3F3ixp8gmdK926HKdMjrVe3GnRoVDyupl3nYkD1KEn68E-Amn0ICrMqW2K7nnIVdhF_245i6lbqejFS9tFWdysH2YNjip-mkTGfmnouhnjVOR9CvJp6jjb-k3ZT68FbYKcTIQ4vboPF9QPv_sFPkieY3SedULzlBqlWPxnU68")',
                    }}
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
