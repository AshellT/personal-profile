import { Link } from "react-router-dom";

import {
  projects,
  agencyPortfolioUrl,
  projectPath,
} from "../../constants";
import { styles } from "../../constants/styles";
import { brand } from "../../constants/brand";
import PageSEO from "../atoms/PageSEO";
import BrandLogo from "../atoms/BrandLogo";

const WorkIndex = () => {
  return (
    <>
      <PageSEO
        title="Selected work | Ashell Tinotenda Gonese"
        description="Selected websites and products from ATG Digital Agency — AI platforms, enterprise systems, and conversion-focused sites for Zimbabwe and the region."
        path="/work"
      />
      <section
        className={`${styles.padding} mx-auto min-h-[70vh] max-w-content pt-28`}
      >
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
          <BrandLogo size="sm" />
          <Link
            to="/#projects"
            className="text-[0.85rem] font-semibold uppercase tracking-[0.12em] text-accent transition hover:text-accent-hover"
          >
            ← Back to home
          </Link>
        </div>

        <p className={styles.sectionLabel}>Selected work</p>
        <h1 className={`${styles.sectionHead} mt-3`}>Projects that ship.</h1>
        <p className={`${styles.sectionBody} mt-5`}>
          Case notes from ATG Digital Agency — enterprise platforms, AI tools,
          and conversion-focused websites built for real operators.
        </p>

        <ul className="mt-12 space-y-0 border-t border-line">
          {projects.map((project, index) => (
            <li
              key={projectPath(project)}
              className="grid gap-6 border-b border-line py-8 sm:grid-cols-12 sm:items-center"
            >
              <Link
                to={projectPath(project)}
                className="block overflow-hidden bg-stone-deep sm:col-span-4"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  loading={index < 4 ? "eager" : "lazy"}
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover transition duration-500 hover:scale-[1.03]"
                />
              </Link>
              <div className="sm:col-span-8">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-accent">
                  {String(index + 1).padStart(2, "0")} · {project.category}
                </p>
                <h2 className="display-font mt-2 text-[clamp(1.5rem,2.8vw,2.2rem)] leading-tight text-ink">
                  <Link
                    to={projectPath(project)}
                    className="transition hover:text-accent"
                  >
                    {project.name}
                  </Link>
                </h2>
                <p className="mt-3 max-w-2xl text-[1.02rem] leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-[0.8rem] font-semibold uppercase tracking-[0.12em]">
                  <Link
                    to={projectPath(project)}
                    className="text-accent transition hover:text-accent-hover"
                  >
                    Open project →
                  </Link>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-ink-soft transition hover:text-ink"
                    >
                      Live site →
                    </a>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border border-line bg-surface px-6 py-6">
          <p className="max-w-xl text-[1.05rem] text-ink-soft">
            Prefer the full agency archive? Browse every delivery story on ATG.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={agencyPortfolioUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              See ATG portfolio
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
        </div>
      </section>
    </>
  );
};

export default WorkIndex;
