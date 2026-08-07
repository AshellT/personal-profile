import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { styles } from "../../constants/styles";
import { faqs } from "../../constants/faq";
import { Header } from "../atoms/Header";
import { brand } from "../../constants/brand";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <Header
        useMotion={false}
        p="FAQ"
        h2="Clear answers before you reach out."
      />
      <p className={`${styles.sectionBody} mt-4`}>
        Common questions about services, location, stack, and how to start a
        project with ATG.
      </p>

      <div className="mt-10 border-t border-line">
        {faqs.map((item, index) => {
          const open = openIndex === index;
          return (
            <div key={item.question} className="border-b border-line">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span className="text-[1.05rem] font-semibold text-ink">
                  {item.question}
                </span>
                <span
                  className="shrink-0 text-[1.25rem] font-medium text-accent"
                  aria-hidden
                >
                  {open ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-3xl pb-5 text-[1.02rem] leading-relaxed text-muted">
                      {item.answer}
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a href="#contact" className="btn-primary">
          Start a project
        </a>
        <a
          href={brand.whatsapp.href}
          target="_blank"
          rel="noreferrer"
          className="btn-ghost"
        >
          WhatsApp
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Faq, "faq");
