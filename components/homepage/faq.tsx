"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How do I book a tour?",
    a: "Choose a tour, open its details page, and click the Book Now button.",
  },
  {
    q: "Do I need an account to book?",
    a: "Yes, you must be logged in to complete a booking.",
  },
  {
    q: "Can I cancel my booking?",
    a: "Most tours allow free cancellation up to 24 hours before departure.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className='py-16'>
      <div className='mx-auto px-6 max-w-5xl'>
        <h1 className='bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-green-500 mb-10 text-transparent text-4xl text-center'>
          Frequently Asked Questions
        </h1>

        <div className='space-y-4'>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className='border rounded-xl'>
                <button
                  type='button'
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className='flex justify-between items-center p-5 w-full font-medium text-left'
                >
                  <span>{faq.q}</span>
                  <span
                    className={`text-xl transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className='px-5 pb-5 text-gray-600 text-sm'>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
