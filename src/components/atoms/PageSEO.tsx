import { Helmet } from "react-helmet-async";

type PageSEOProps = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  image?: string;
  type?: "website" | "article";
};

const SITE = "https://ashelltinotenda.co.zw";

const PageSEO = ({
  title,
  description,
  path = "/",
  noIndex = false,
  image = `${SITE}/og/og-card.jpg`,
  type = "website",
}: PageSEOProps) => {
  const url = `${SITE}${path === "/" ? "/" : path}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE}${image}`;

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noIndex ? <meta name="robots" content="noindex, follow" /> : null}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default PageSEO;
