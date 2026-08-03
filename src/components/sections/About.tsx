import { motion } from "framer-motion";

import { services, stackGroups } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { styles } from "../../constants/styles";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const About = () => {
  return (
    <>
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <Header {...config.sections.about} />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className={`${styles.sectionBody} mt-6 space-y-4 whitespace-pre-line`}
          >
            {config.sections.about.content.split("\n\n").map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph.trim()}</p>
            ))}
          </motion.div>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-5 text-[0.85rem] text-ink-soft">
            <p>
              Founder ·{" "}
              <a
                href="https://www.atgdigitalagency.co.zw/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-accent transition hover:text-accent-hover"
              >
                ATG Digital Agency
              </a>
            </p>
            <p>Based in Harare, Zimbabwe</p>
            <p>Open for select projects</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5"
        >
          <div className="overflow-hidden bg-stone-deep">
            <img
              src="/about/ashell-gonese.webp"
              alt="Ashell Tinotenda Gonese"
              width={640}
              height={800}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <p className="mt-3 text-[0.8rem] text-muted">
            Ashell Tinotenda Gonese · Harare, Zimbabwe
          </p>
        </motion.div>
      </div>

      <div className="mt-14 grid gap-0 border-t border-line sm:grid-cols-2">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="border-b border-line py-6 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
          >
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-accent">
              0{index + 1}
            </p>
            <h3 className="display-font mt-2 text-[1.65rem] text-ink">
              {service.title}
            </h3>
          </motion.div>
        ))}
      </div>

      <div className="mt-14 border-t border-line pt-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className={styles.sectionLabel}>Stack</p>
            <h3 className="display-font mt-3 text-[clamp(1.75rem,3vw,2.35rem)] leading-tight text-ink">
              Tools I use to ship.
            </h3>
          </div>
          <p className="max-w-sm text-[0.95rem] text-muted">
            Product engineering plus Microsoft 365, cloud, networking,
            cybersecurity, AI, and automation used in real delivery.
          </p>
        </div>

        <div className="mt-8 grid gap-0 border-t border-line sm:grid-cols-2">
          {stackGroups.map((group, index) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border-b border-line py-7 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
            >
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-accent">
                {group.label}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-line bg-surface px-3 py-1.5 text-[0.9rem] font-medium text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
