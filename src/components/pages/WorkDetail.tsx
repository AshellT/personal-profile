import { Link, Navigate, useParams } from "react-router-dom";

import {
  getProjectBySlug,
  projectPath,
  projects,
  agencyPortfolioUrl,
} from "../../constants";
import { styles } from "../../constants/styles";
import { brand } from "../../constants/brand";
import PageSEO from "../atoms/PageSEO";
import BrandLogo from "../atoms/BrandLogo";

const WorkDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const path = projectPath(project);
  const index = projects.findIndex((item) => item.name === project.name);
  const prev = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  return (
    <>
      <PageSEO
        title={`${project.name} | Ashell Tinotenda Gonese`}
        description={project.description}
        path={path}
        image={project.image}
        type="article"
      />
      <article
        className={`${styles.padding} mx-auto min-h-[70vh] max-w-content pt-28`}
      >
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
          <BrandLogo size="sm" />
          <Link
            to="/work"
            className="text-[0.85rem] font-semibold uppercase tracking-[0.12em] text-accent transition hover:text-accent-hover"
          >
            ← All work
          </Link>
        </div>

        <p className={styles.sectionLabel}>{project.category}</p>
        <h1 className={`${styles.sectionHead} mt-3`}>{project.name}</h1>
        <p className={`${styles.sectionBody} mt-5`}>{project.description}</p>

        {project.outcome ? (
          <p className="mt-4 max-w-2xl text-[1.05rem] font-medium leading-relaxed text-ink-soft">
            {project.outcome}
          </p>
        ) : null}

        <div className="mt-8 overflow-hidden bg-stone-deep">
          <img
            src={project.image}
            alt={project.name}
            className="aspect-[16/9] w-full object-cover"
            decoding="async"
          />
        </div>

        {project.secondaryImage ? (
          <div className="mt-4 overflow-hidden bg-stone-deep">
            <img
              src={project.secondaryImage}
              alt={`${project.name} detail`}
              className="aspect-[16/9] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        ) : null}

        {project.metrics?.length ? (
          <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="border-t border-line pt-3">
                <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">
                  {metric.label}
                </dt>
                <dd className="mt-1 text-[1.15rem] font-semibold text-ink">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}

        <div className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-line px-2.5 py-1 text-[0.72rem] font-medium uppercase tracking-wider text-ink-soft"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={project.caseStudyUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            View on ATG
          </a>
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

        <nav className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
          {prev ? (
            <Link
              to={projectPath(prev)}
              className="text-[0.85rem] font-semibold uppercase tracking-[0.12em] text-ink-soft transition hover:text-accent"
            >
              ← {prev.name}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to={projectPath(next)}
              className="text-[0.85rem] font-semibold uppercase tracking-[0.12em] text-ink-soft transition hover:text-accent"
            >
              {next.name} →
            </Link>
          ) : (
            <a
              href={agencyPortfolioUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[0.85rem] font-semibold uppercase tracking-[0.12em] text-accent"
            >
              ATG portfolio →
            </a>
          )}
        </nav>
      </article>
    </>
  );
};

export default WorkDetail;
