'use client'

import React, { useState } from 'react'

const faqs = [
  {
    question: 'How much does a solar system cost?',
    answer:
      'The cost of a solar system varies depending on its size, the components used, and your location. We provide a detailed quote after our initial consultation. Many government incentives and financing options are available to make solar more affordable.',
  },
  {
    question: 'How long does a solar installation take?',
    answer:
      'A typical residential installation can be completed in 1-3 days. The entire process, from consultation to activation, usually takes a few weeks, including permitting and utility approvals.',
  },
  {
    question: 'What happens if my solar panels are damaged?',
    answer:
      "Our solar panels come with a 25-year manufacturer's warranty. We also offer workmanship warranties. If you experience any issues, our support team is here to help you with repairs or replacements.",
  },
  {
    question: 'Do solar panels work on cloudy days?',
    answer:
      'Yes, solar panels still produce electricity on cloudy days, although their output is reduced. Our system designs account for the average number of sunny days in your area to accurately predict your annual energy production.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="py-16 md:py-24 bg-background-light/50 dark:bg-background-dark/50"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-background-dark/70 dark:text-background-light/70">
            Everything you need to know about going solar with us.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mt-12 max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg bg-white/70 dark:bg-background-dark/70 backdrop-blur-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left px-4 py-3 font-medium text-lg text-gray-900 dark:text-gray-100"
              >
                {faq.question}
                <span
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-sm text-background-dark/70 dark:text-background-light/70">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
