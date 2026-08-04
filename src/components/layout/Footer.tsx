import { Link } from "react-router-dom";

import { styles } from "../../constants/styles";
import { config } from "../../constants/config";
import { navLinks } from "../../constants";
import { brand } from "../../constants/brand";
import BrandLogo from "../atoms/BrandLogo";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-gradient-to-b from-transparent to-stone-deep/40">
      <div
        className={`${styles.paddingX} mx-auto grid max-w-content gap-12 py-14 lg:grid-cols-12`}
      >
        <div className="lg:col-span-5">
          <BrandLogo size="md" />
          <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-muted">
            Full-Stack Systems Engineer and founder of ATG Digital Agency —
            available for web platforms, automation systems, and product
            delivery.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${config.html.email}`} className="btn-primary">
              Email me
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
          <a
            href={`mailto:${config.html.email}`}
            className="mt-5 inline-block text-[0.95rem] font-medium text-accent transition hover:text-accent-hover"
          >
            {config.html.email}
          </a>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7 lg:pl-8">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-accent">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`/#${link.id}`}
                    className="text-[0.95rem] text-ink-soft transition hover:text-ink"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-accent">
              Connect
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="https://www.atgdigitalagency.co.zw/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[0.95rem] text-ink-soft transition hover:text-ink"
                >
                  ATG Digital Agency
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ashell-gonese-832570386/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[0.95rem] text-ink-soft transition hover:text-ink"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={brand.whatsapp.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[0.95rem] text-ink-soft transition hover:text-ink"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={brand.cvUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[0.95rem] text-ink-soft transition hover:text-ink"
                >
                  CV
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-accent">
              Legal
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  to="/privacy"
                  className="text-[0.95rem] text-ink-soft transition hover:text-ink"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-[0.95rem] text-ink-soft transition hover:text-ink"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${config.html.email}?subject=Data%20request`}
                  className="text-[0.95rem] text-ink-soft transition hover:text-ink"
                >
                  Data request
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`${styles.paddingX} mx-auto flex max-w-content flex-col gap-4 border-t border-line py-6 text-[0.8rem] text-muted sm:flex-row sm:items-center sm:justify-between`}
      >
        <p className="inline-flex items-center gap-2">
          <img
            src="/brand/atg-logo-a-master-512.png"
            alt=""
            aria-hidden
            className="h-5 w-5 bg-ink object-cover"
            width={20}
            height={20}
          />
          <span>© {year} Ashell Tinotenda Gonese</span>
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link to="/privacy" className="transition hover:text-ink">
            Privacy
          </Link>
          <Link to="/terms" className="transition hover:text-ink">
            Terms
          </Link>
          <span>Harare, Zimbabwe</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
