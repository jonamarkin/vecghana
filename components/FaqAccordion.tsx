"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How far in advance should we book?",
    answer:
      "We recommend booking at least 3 to 6 weeks in advance to allow our artistic director to prepare the score, schedule rehearsals, and guarantee full ensemble availability for your chosen date.",
  },
  {
    question: "Can we request specific custom songs or hymns?",
    answer:
      "Yes! We gladly accommodate personalized repertoire requests, favorite classical anthems, Ghanaian choral highlife medleys, and custom entrance hymns tailored to your program.",
  },
  {
    question: "Does the choir travel outside Accra and internationally?",
    answer:
      "Absolutely. VocalEssence Chorale regularly travels across all regions of Ghana and internationally (such as the Africa Sings Festival in Benin). Travel, accommodation, and logistics can be coordinated with our management team.",
  },
  {
    question: "What packages are available for weddings and corporate events?",
    answer:
      "We offer flexible ensemble packages ranging from our full 40+ voice chorale with live orchestra and brass section, to intimate chamber vocal ensembles tailored to your ceremony and banquet.",
  },
  {
    question: "How can I audition to join VocalEssence Chorale?",
    answer:
      "We hold seasonal auditions for passionate, committed soprano, alto, tenor, and bass vocalists, as well as orchestral and brass instrumentalists. Fill out the booking form or message our secretariat on WhatsApp at +233 20 007 9728.",
  },
  {
    question: "How are booking confirmations and payments handled?",
    answer:
      "Once date availability and repertoire are agreed upon, our secretariat provides an official booking engagement invoice. Payments are accepted through official bank transfers or verified mobile money.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion-container">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`faq-accordion-item ${isOpen ? "open" : ""}`}
          >
            <button
              type="button"
              className="faq-accordion-header"
              onClick={() => toggleFaq(idx)}
              aria-expanded={isOpen}
            >
              <span className="faq-accordion-question">{faq.question}</span>
              <span className="faq-accordion-icon">
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            <div
              className="faq-accordion-body"
              style={{
                maxHeight: isOpen ? "300px" : "0px",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="faq-accordion-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
