import { useEffect, useState } from "react";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { brand } from "../../constants/brand";
import { menu, close } from "../../assets";
import BrandLogo from "../atoms/BrandLogo";

const Navbar = () => {
  const [active, setActive] = useState<string>("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        const sectionHeight = (current as HTMLElement).offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0 && sectionId) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", navbarHighlighter);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-stone/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div
        className={`${styles.paddingX} mx-auto flex h-[72px] max-w-content items-center justify-between`}
      >
        <BrandLogo
          size="sm"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        />

        <ul className="hidden list-none items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`/#${link.id}`}
                className={`text-[0.85rem] font-medium tracking-wide transition ${
                  active === link.id
                    ? "text-accent"
                    : "text-ink-soft hover:text-ink"
                }`}
                onClick={() => setActive(link.id)}
              >
                {link.title}
              </a>
            </li>
          ))}
          <li>
            <a
              href={brand.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-[0.8rem]"
            >
              Review CV
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="Toggle menu"
          aria-expanded={toggle}
          onClick={() => setToggle((prev) => !prev)}
        >
          <img
            src={toggle ? close : menu}
            alt=""
            className="h-6 w-6 object-contain"
          />
        </button>
      </div>

      {toggle ? (
        <div className="border-t border-line bg-stone px-6 py-6 md:hidden">
          <ul className="flex list-none flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`/#${link.id}`}
                  className="text-base font-medium text-ink-soft"
                  onClick={() => {
                    setToggle(false);
                    setActive(link.id);
                  }}
                >
                  {link.title}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={brand.cvUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full"
              >
                Review CV
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
