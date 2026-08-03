import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { styles } from "../../constants/styles";
import { clientQuotes, deliveryStats } from "../../constants/proof";

const Proof = () => {
  return (
    <>
      <Header
        p="Social proof"
        h2="Results clients feel."
      />
      <p className={`${styles.sectionBody} mt-5`}>
        Delivery outcomes from shipped systems and websites — framed by role and
        project context where client names stay confidential.
      </p>

      <div className="mt-10 grid gap-4 border border-line bg-surface/50 p-5 sm:grid-cols-2 lg:grid-cols-4 sm:p-6">
        {deliveryStats.map((stat) => (
          <div key={stat.label} className="border-t border-line pt-4 sm:border-t-0 sm:border-l sm:pl-5 sm:first:border-l-0 sm:first:pl-0">
            <p className="display-font text-[2rem] leading-none text-ink">
              {stat.value}
            </p>
            <p className="mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-accent">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {clientQuotes.map((item, index) => (
          <motion.blockquote
            key={item.context}
            initial={{ y: 14 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex h-full flex-col border border-line bg-surface px-6 py-7"
          >
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent">
              {item.context}
            </p>
            <p className="display-font mt-4 flex-1 text-[1.35rem] leading-snug text-ink">
              “{item.quote}”
            </p>
            <footer className="mt-6 text-[0.9rem] font-medium text-ink-soft">
              {item.role}
            </footer>
          </motion.blockquote>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border border-line px-6 py-5">
        <p className="text-[0.95rem] text-muted">
          Open for websites, systems, automation, and product builds.
        </p>
        <a href="#contact" className="btn-primary">
          Start a project
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Proof, "proof");
