import { motion } from "framer-motion";

import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { styles } from "../../constants/styles";
import { config } from "../../constants/config";

const Experience = () => {
  return (
    <>
      <Header {...config.sections.experience} />
      {config.sections.experience.content ? (
        <p className={`${styles.sectionBody} mt-5`}>
          {config.sections.experience.content}
        </p>
      ) : null}

      <div className="relative mt-12 border-t border-line pl-6 md:pl-0">
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-2 left-[0.35rem] top-2 w-px bg-line md:left-[24.5%]"
        />

        {experiences.map((experience, index) => {
          const isCurrent = experience.date.toLowerCase().includes("present");
          const points = isCurrent
            ? experience.points
            : experience.points.slice(0, 3);

          return (
            <motion.article
              key={`${experience.title}-${experience.date}`}
              initial={{ y: 14 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.08, margin: "60px 0px" }}
              transition={{
                duration: 0.4,
                delay: Math.min(index * 0.04, 0.2),
              }}
              className={`group relative grid gap-4 border-b border-line py-9 md:grid-cols-12 md:gap-8 ${
                isCurrent ? "bg-gradient-to-r from-accent/[0.04] to-transparent" : ""
              }`}
            >
              <span
                aria-hidden
                className={`absolute left-[0.35rem] top-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-stone transition-colors md:left-[24.5%] md:top-11 ${
                  isCurrent
                    ? "bg-accent"
                    : "bg-ink-soft/35 group-hover:bg-accent"
                }`}
              />

              <div className="md:col-span-3 md:pr-8">
                <p className="text-[0.9rem] font-semibold text-accent">
                  {experience.date}
                </p>
                {isCurrent ? (
                  <span className="mt-3 inline-flex border border-accent/25 bg-surface px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-accent">
                    Current role
                  </span>
                ) : (
                  <p className="mt-3 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(experiences.length).padStart(2, "0")}
                  </p>
                )}
              </div>

              <div className="md:col-span-9">
                <h3 className="display-font text-[clamp(1.45rem,2.4vw,1.85rem)] leading-tight text-ink transition-colors group-hover:text-accent">
                  {experience.title}
                </h3>
                <p className="mt-2 text-[0.95rem] font-medium text-ink-soft">
                  {experience.companyName}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="relative pl-4 text-[0.98rem] leading-relaxed text-muted before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-accent"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
