import { motion } from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";

import { styles } from "../../constants/styles";
import { config } from "../../constants/config";
import { github } from "../../assets";

const ComputersCanvas = lazy(() => import("../canvas/Computers"));

const Hero = () => {
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    let timeoutId: number | undefined;
    let idleId: number | undefined;

    const start = () => setShowCanvas(true);

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      idleId = (window as any).requestIdleCallback(start, { timeout: 1200 });
    } else {
      timeoutId = globalThis.setTimeout(start, 900);
    }

    return () => {
      if (typeof idleId === "number" && "cancelIdleCallback" in window) {
        (window as any).cancelIdleCallback(idleId);
      }
      if (typeof timeoutId === "number") {
        globalThis.clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div
        className={`pointer-events-none absolute inset-0 top-[110px] z-20 mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="pointer-events-auto mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-cyan-400" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div className="pointer-events-auto max-w-4xl">
          <p className="headline-font mb-3 inline-block rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.14em] text-cyan-200">
            Harare, Zimbabwe
          </p>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-cyan-300">{config.hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://drive.google.com/file/d/1zPAgFIdU4UwTHnrKZrMeIVuh56lMSlGi/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="headline-font rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
            >
              REVIEW CV
            </a>
            <a
              href="mailto:ashell.gonese@outlook.com"
              className="headline-font rounded-xl border border-slate-300/40 bg-slate-950/40 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300"
            >
              ashell.gonese@outlook.com
            </a>
            <a
              href="https://www.linkedin.com/in/ashell-gonese-832570386/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-300/40 bg-amber-300/10 text-amber-100 transition hover:bg-amber-300/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M6.94 8.5H3.56V20h3.38V8.5Zm-1.69-1.55a1.97 1.97 0 1 0 0-3.94 1.97 1.97 0 0 0 0 3.94ZM20 13.49C20 10.1 18.08 8.3 15.51 8.3c-1.53 0-2.21.84-2.59 1.43V8.5H9.55V20h3.38v-6.2c0-1.63.31-3.2 2.33-3.2 1.98 0 2.01 1.85 2.01 3.3V20H20v-6.51Z" />
              </svg>
            </a>
            <a
              href="https://github.com/AshellTor"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-300/40 bg-slate-950/40 transition hover:border-cyan-300"
            >
              <img src={github} alt="GitHub" className="h-5 w-5 object-contain" />
            </a>
          </div>
        </div>
      </div>

      {showCanvas ? (
        <div className="pointer-events-none absolute inset-0 z-0 translate-y-16 opacity-85 md:translate-y-0 md:opacity-100">
          <Suspense fallback={null}>
            <ComputersCanvas />
          </Suspense>
        </div>
      ) : null}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-[#030712]/90 to-transparent" />

      <div className="xs:bottom-10 absolute bottom-32 z-20 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
