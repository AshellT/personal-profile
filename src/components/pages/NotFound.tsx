import { Link } from "react-router-dom";

import { styles } from "../../constants/styles";
import BrandLogo from "../atoms/BrandLogo";

const NotFound = () => {
  return (
    <section className={`${styles.padding} mx-auto flex min-h-[70vh] max-w-content flex-col justify-center pt-28`}>
      <BrandLogo size="sm" />
      <p className={`${styles.sectionLabel} mt-10`}>404</p>
      <h1 className={`${styles.sectionHead} mt-3`}>Page not found.</h1>
      <p className={`${styles.sectionBody} mt-5`}>
        That route doesn’t exist. Head home or jump into selected work.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/" className="btn-primary">
          Back home
        </Link>
        <Link to="/#projects" className="btn-ghost">
          View work
        </Link>
        <Link to="/#contact" className="btn-ghost">
          Contact
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
