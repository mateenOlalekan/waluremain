import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Q: Can I take a tour before signing up?",
    answer:
      "A: Yes, we encourage prospective members to schedule a tour prior to registration.",
  },
  {
    question: "Q: Do I need to book in advance?",
    answer: "A: Yes. We recommend booking in advance to ensure availability.",
  },
  {
    question: "Q: What are the opening hours?",
    answer: "A: We open from 9 a.m (WAT) to 5 p.m (WAT).",
  },
  {
    question: "Q: Do you offer discounts for teams or long-term members?",
    answer:
      "A: Yes. We provide customized pricing for teams and offer discounted rates for long-term membership.",
  },
  {
    question: "Q: Is your space pet-friendly?",
    answer:
      "A: We generally do not permit pets for the comfort and safety of all members.",
  },
  {
    question: "Q: Can I upgrade or downgrade my plan later?",
    answer:
      "A: Yes. We assist with upgrading or downgrading your plan without disruption to your access.",
  },
  {
    question: "Q: Are the extras included in the plans?",
    answer:
      "A: Yes. We allow members to welcome their guests in designated areas after registering at the front desk.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full flex justify-center bg-[#ECFDF3] py-16 px-4">
      <div className="w-full max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently <span className="text-green-500">Asked</span> Questions
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have a question? Start here. From memberships to amenities, our FAQs
            cover everything you need to make the most of your co-working
            experience.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left p-5"
              >
                <span className="font-medium text-gray-800">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
