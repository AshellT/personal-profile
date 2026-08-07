import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { config } from "../../constants/config";
import { brand } from "../../constants/brand";

const Hero = () => {
  return (
    <section className="hero-atmosphere relative flex min-h-screen w-full items-end overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-32">
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute left-[-10%] top-[18%] h-[55vmin] w-[55vmin] rounded-full bg-accent/[0.05] blur-3xl" />
        <div className="absolute bottom-[8%] right-[-8%] h-[42vmin] w-[42vmin] rounded-full bg-ink/[0.035] blur-3xl" />
      </motion.div>

      <div className={`${styles.paddingX} relative z-[1] mx-auto w-full max-w-content`}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-accent">
              Harare, Zimbabwe
            </p>
            <span className="hidden h-1 w-1 rounded-full bg-accent/50 sm:inline-block" />
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink-soft">
              Open for projects · replies within 24h
            </p>
          </div>

          <h1 className={styles.heroName}>{config.hero.name}</h1>

          <p className={`${styles.heroRole} mt-6`}>{config.hero.role}</p>

          <p className={`${styles.heroSupport} mt-4`}>{config.hero.support}</p>

          <p className="mt-4 max-w-xl text-[0.92rem] text-muted">
            Also strong in networking, cybersecurity, Microsoft 365, and
            automation — applied where products need reliability as much as UI.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="/work"
              className="btn-primary"
            >
              See the work
            </a>
            <a href="#contact" className="btn-ghost">
              Start a project
            </a>
            <div className="ml-0 flex items-center gap-2 sm:ml-2">
              <a
                href={brand.whatsapp.href}
                target="_blank"
                rel="noreferrer"
                className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-ink-soft transition hover:text-accent"
              >
                WhatsApp
              </a>
              <span className="text-line">/</span>
              <a
                href={brand.cvUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-ink-soft transition hover:text-accent"
              >
                CV
              </a>
              <span className="text-line">/</span>
              <a
                href={brand.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-ink-soft transition hover:text-accent"
              >
                LinkedIn
              </a>
              <span className="text-line">/</span>
              <a
                href={brand.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-ink-soft transition hover:text-accent"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-px bg-line" />
    </section>
  );
};

export default Hero;
