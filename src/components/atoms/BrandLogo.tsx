import { Link } from "react-router-dom";

import { brand } from "../../constants/brand";

type BrandLogoProps = {
  variant?: "mark" | "wide" | "lockup";
  size?: "sm" | "md" | "lg";
  showName?: boolean;
  to?: string;
  onClick?: () => void;
  className?: string;
};

const sizeMap = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
} as const;

const srcMap = {
  mark: brand.mark,
  wide: brand.markWide,
  lockup: brand.lockup,
} as const;

const BrandLogo = ({
  variant = "mark",
  size = "md",
  showName = true,
  to = "/",
  onClick,
  className = "",
}: BrandLogoProps) => {
  const content = (
    <>
      <span className="inline-flex shrink-0 overflow-hidden bg-ink shadow-sm">
        <img
          src={srcMap[variant]}
          alt={brand.alt}
          width={40}
          height={40}
          className={`${sizeMap[size]} object-cover`}
          decoding="async"
        />
      </span>
      {showName ? (
        <span className="display-font text-[1.25rem] leading-none text-ink sm:text-[1.35rem]">
          {brand.name}
        </span>
      ) : null}
    </>
  );

  const classes = `inline-flex items-center gap-3 transition hover:opacity-90 ${className}`;

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={classes} aria-label={brand.alt}>
        {content}
      </Link>
    );
  }

  return (
    <div className={classes} aria-label={brand.alt}>
      {content}
    </div>
  );
};

export default BrandLogo;
