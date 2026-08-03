import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { credentials } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { styles } from "../../constants/styles";
import { config } from "../../constants/config";
import type { TCredential } from "../../constants/credentials";

const INITIAL_VISIBLE = 8;

const CredentialRow = ({
  item,
  index,
  total,
}: {
  item: TCredential;
  index: number;
  total: number;
}) => {
  return (
    <motion.article
      layout
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.12) }}
      className="group grid gap-3 border-b border-line py-7 sm:grid-cols-12 sm:items-start sm:gap-8"
    >
      <div className="sm:col-span-3">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent">
          {item.designation}
        </p>
        <p className="mt-2 text-[0.8rem] font-medium text-muted">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          {item.issued ? ` · ${item.issued}` : ""}
        </p>
      </div>

      <div className="sm:col-span-9">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="display-font text-[clamp(1.3rem,2.1vw,1.65rem)] leading-tight text-ink transition-colors group-hover:text-accent">
            {item.name}
          </h3>
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-ink-soft">
            {item.company}
          </p>
        </div>
        <p className="mt-3 max-w-2xl text-[0.98rem] leading-relaxed text-muted">
          {item.testimonial}
        </p>
        {item.credentialId ? (
          <p className="mt-2 text-[0.78rem] text-muted">
            Credential ID{" "}
            <span className="font-medium text-ink-soft">{item.credentialId}</span>
          </p>
        ) : null}
        {item.credentialUrl ? (
          <a
            href={item.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-accent transition hover:text-accent-hover"
          >
            Show credential →
          </a>
        ) : null}
      </div>
    </motion.article>
  );
};

const Credentials = () => {
  const [expanded, setExpanded] = useState(false);

  const achievements = useMemo(
    () =>
      credentials.filter(
        (item) => item.designation.toLowerCase() === "achievement"
      ),
    []
  );

  const certifications = useMemo(
    () =>
      credentials.filter(
        (item) => item.designation.toLowerCase() !== "achievement"
      ),
    []
  );

  const featured = useMemo(
    () => certifications.filter((item) => item.featured),
    [certifications]
  );

  const rest = useMemo(
    () => certifications.filter((item) => !item.featured),
    [certifications]
  );

  const visible = expanded
    ? certifications
    : [...featured, ...rest].slice(0, INITIAL_VISIBLE);

  const hiddenCount = Math.max(certifications.length - visible.length, 0);

  const issuerCount = useMemo(() => {
    return new Set(certifications.map((item) => item.company)).size;
  }, [certifications]);

  const googleCount = certifications.filter((item) =>
    item.company.toLowerCase().includes("google")
  ).length;
  const ibmCount = certifications.filter((item) =>
    item.company.toLowerCase().includes("ibm")
  ).length;
  const oracleCount = certifications.filter((item) =>
    item.company.toLowerCase().includes("oracle")
  ).length;

  return (
    <>
      <Header {...config.sections.credentials} />
      {config.sections.credentials.content ? (
        <p className={`${styles.sectionBody} mt-5`}>
          {config.sections.credentials.content}
        </p>
      ) : null}

      <div className="mt-10 grid gap-6 border border-line bg-surface/60 px-5 py-5 sm:grid-cols-4 sm:px-8">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-accent">
            Total
          </p>
          <p className="display-font mt-2 text-[2rem] leading-none text-ink">
            {credentials.length}
          </p>
        </div>
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-accent">
            Issuers
          </p>
          <p className="display-font mt-2 text-[2rem] leading-none text-ink">
            {issuerCount}
          </p>
        </div>
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-accent">
            Google · IBM · Oracle
          </p>
          <p className="mt-3 text-[0.95rem] font-medium leading-snug text-ink-soft">
            {googleCount} · {ibmCount} · {oracleCount}
          </p>
        </div>
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-accent">
            Focus
          </p>
          <p className="mt-3 text-[0.95rem] font-medium leading-snug text-ink-soft">
            AI · Security · Cloud · Support
          </p>
        </div>
      </div>

      {achievements.map((item) => (
        <motion.div
          key={item.name}
          initial={{ y: 12 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="mt-8 border border-line bg-gradient-to-r from-accent/[0.05] to-transparent px-6 py-7 sm:px-8"
        >
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-accent">
            Achievement
          </p>
          <h3 className="display-font mt-3 text-[clamp(1.5rem,2.6vw,2rem)] leading-tight text-ink">
            {item.name}
          </h3>
          <p className="mt-3 max-w-2xl text-[1.02rem] leading-relaxed text-muted">
            {item.testimonial}
          </p>
          <p className="mt-4 text-[0.85rem] font-semibold uppercase tracking-[0.12em] text-ink-soft">
            {item.company}
            {item.issued ? ` · ${item.issued}` : ""}
          </p>
        </motion.div>
      ))}

      <div className="mt-12">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b border-line pb-4">
          <p className={styles.sectionLabel}>Certifications</p>
          <p className="text-[0.8rem] font-medium text-muted">
            Showing {visible.length} of {certifications.length}
          </p>
        </div>

        <AnimatePresence initial={false}>
          {visible.map((item, index) => (
            <CredentialRow
              key={`${item.name}-${item.credentialId ?? item.issued}`}
              item={item}
              index={index}
              total={certifications.length}
            />
          ))}
        </AnimatePresence>

        {certifications.length > INITIAL_VISIBLE ? (
          <div className="mt-8 flex justify-center border-t border-line pt-8">
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="btn-ghost"
              aria-expanded={expanded}
            >
              {expanded
                ? "Show less"
                : `View more credentials (${hiddenCount})`}
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SectionWrapper(Credentials, "credentials");
