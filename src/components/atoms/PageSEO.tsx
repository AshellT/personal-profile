import { Helmet } from "react-helmet-async";

type PageSEOProps = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
};

const SITE = "https://ashelltinotenda.co.zw";

const PageSEO = ({
  title,
  description,
  path = "/",
  noIndex = false,
}: PageSEOProps) => {
  const url = `${SITE}${path === "/" ? "/" : path}`;

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noIndex ? <meta name="robots" content="noindex, follow" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default PageSEO;
