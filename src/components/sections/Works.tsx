import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  projects,
  agencyPortfolioUrl,
  projectPath,
} from "../../constants";
import { styles } from "../../constants/styles";
import { config } from "../../constants/config";
import { brand } from "../../constants/brand";
import { Header } from "../atoms/Header";
import { SectionWrapper } from "../../hoc";
import type { TProject } from "../../types";

const FeaturedProject: React.FC<{ project: TProject; index: number }> = ({
  project,
  index,
}) => {
  const reverse = index % 2 === 1;
  const href = projectPath(project);

  return (
    <motion.article
      initial={{ y: 18 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.05, margin: "80px 0px" }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.16) }}
      className="grid items-center gap-8 border-b border-line py-12 lg:grid-cols-12 lg:gap-12"
    >
      <div
        className={`group relative overflow-hidden bg-stone-deep ${
          reverse ? "lg:col-span-6 lg:order-2" : "lg:col-span-6"
        }`}
      >
        <Link to={href} className="block">
          <img
            src={project.image}
            alt={project.name}
            loading={index < 2 ? "eager" : "lazy"}
            decoding="async"
            className="aspect-[16/10] h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          />
        </Link>
        {project.secondaryImage ? (
          <Link
            to={href}
            className="absolute bottom-3 right-3 hidden w-[42%] overflow-hidden border border-white/40 shadow-lg sm:block"
          >
            <img
              src={project.secondaryImage}
              alt={`${project.name} detail`}
              loading="lazy"
              decoding="async"
              className="aspect-[16/10] w-full object-cover"
            />
          </Link>
        ) : null}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-70" />
      </div>

      <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-accent">
          {String(index + 1).padStart(2, "0")} · {project.category}
        </p>
        <h3 className="display-font mt-3 text-[clamp(1.85rem,3.2vw,2.75rem)] leading-[1.08] text-ink">
          <Link to={href} className="transition hover:text-accent">
            {project.name}
          </Link>
        </h3>
        <p className="mt-4 max-w-xl text-[1.02rem] leading-relaxed text-muted">
          {project.description}
        </p>
        {project.outcome ? (
          <p className="mt-3 max-w-xl text-[0.95rem] font-medium leading-relaxed text-ink-soft">
            {project.outcome}
          </p>
        ) : null}

        {project.metrics?.length ? (
          <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="border-t border-line pt-3">
                <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">
                  {metric.label}
                </dt>
                <dd className="mt-1 text-[1.05rem] font-semibold text-ink">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-line px-2.5 py-1 text-[0.72rem] font-medium uppercase tracking-wider text-ink-soft"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link to={href} className="btn-primary">
            View project
          </Link>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              Live site
            </a>
          ) : (
            <a
              href={`${brand.whatsapp.href}?text=${encodeURIComponent(
                `Hi Ashell — I'd like a demo of ${project.name}.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              Request a demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const ProjectCard: React.FC<{ project: TProject; index: number }> = ({
  project,
  index,
}) => {
  const href = projectPath(project);

  return (
    <motion.article
      initial={{ y: 14 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.05, margin: "80px 0px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.18) }}
      className="group flex flex-col border-b border-line pb-8 sm:border-b-0 sm:pb-0"
    >
      <Link to={href} className="relative block overflow-hidden bg-stone-deep">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          decoding="async"
          className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
      </Link>
      <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-accent">
        {project.category}
      </p>
      <h3 className="display-font mt-2 text-[1.45rem] leading-tight text-ink">
        <Link to={href} className="transition hover:text-accent">
          {project.name}
        </Link>
      </h3>
      <p className="mt-2 line-clamp-3 flex-1 text-[0.95rem] leading-relaxed text-muted">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-4 text-[0.8rem] font-semibold uppercase tracking-[0.12em]">
        <Link
          to={href}
          className="text-accent transition hover:text-accent-hover"
        >
          View project →
        </Link>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-ink-soft transition hover:text-ink"
          >
            Live →
          </a>
        ) : (
          <a href="#contact" className="text-ink-soft transition hover:text-ink">
            Demo on request →
          </a>
        )}
      </div>
    </motion.article>
  );
};

const Works = () => {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <>
      <Header {...config.sections.works} />

      <div className="mt-4 flex w-full flex-wrap items-end justify-between gap-4">
        <p className={`${styles.sectionBody} whitespace-pre-line`}>
          {config.sections.works.content}
        </p>
        <Link
          to="/work"
          className="shrink-0 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-accent transition hover:text-accent-hover"
        >
          All work pages →
        </Link>
      </div>

      <div className="mt-8 border-t border-line">
        {featured.map((project, index) => (
          <FeaturedProject
            key={projectPath(project)}
            project={project}
            index={index}
          />
        ))}
      </div>

      <div className="mt-16">
        <p className={styles.sectionLabel}>More selected work</p>
        <h3
          className={`${styles.sectionHead} mt-3 text-[clamp(1.8rem,3vw,2.5rem)]`}
        >
          Platforms across industries.
        </h3>
        <div className="mt-10 grid gap-x-8 gap-y-12 border-t border-line pt-10 sm:grid-cols-2 xl:grid-cols-3">
          {rest.map((project, index) => (
            <ProjectCard
              key={projectPath(project)}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border border-line bg-surface px-6 py-6">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-accent">
            ATG Digital Agency
          </p>
          <p className="mt-2 max-w-xl text-[1.05rem] text-ink-soft">
            Explore every case study on the agency site — or browse indexable
            project pages here.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/work" className="btn-primary">
            Browse /work
          </Link>
          <a
            href={agencyPortfolioUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            ATG portfolio
          </a>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
