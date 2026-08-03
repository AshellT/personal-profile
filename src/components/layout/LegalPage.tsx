import { Link } from "react-router-dom";
import { useEffect } from "react";

import { styles } from "../../constants/styles";
import BrandLogo from "../atoms/BrandLogo";

type LegalPageProps = {
  title: string;
  updated: string;
  children: React.ReactNode;
};

const LegalPage = ({ title, updated, children }: LegalPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <section className={`${styles.padding} mx-auto min-h-[70vh] max-w-content pt-28`}>
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
        <BrandLogo size="sm" />
        <Link
          to="/"
          className="text-[0.85rem] font-semibold uppercase tracking-[0.12em] text-accent transition hover:text-accent-hover"
        >
          ← Back to home
        </Link>
      </div>

      <p className={styles.sectionLabel}>Legal</p>
      <h1 className={`${styles.sectionHead} mt-3`}>{title}</h1>
      <p className="mt-3 text-[0.9rem] text-muted">Last updated {updated}</p>

      <div className="prose-legal mt-10 max-w-3xl space-y-8 text-[1.02rem] leading-relaxed text-muted">
        {children}
      </div>
    </section>
  );
};

export default LegalPage;
