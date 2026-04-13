import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  canonical,
  keywords,
  ogImage,
}) {
  const siteName = "Wisdom Academy & Research Center";
  const shortName = "WAARC";

  const websiteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: siteName,
        alternateName: [shortName, "Wisdom Academy"],
        url: canonical || "https://waarc.edu.np/",
      },
      {
        "@type": "Organization",
        name: siteName,
        alternateName: shortName,
        url: canonical || "https://waarc.edu.np/",
        logo: "https://waarc.edu.np/logo.png",
        description,
      },
    ],
  };

  return (
    <Helmet>
      {/* Primary SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Robots */}
      <meta name="robots" content="index, follow" />

      {/* Author */}
      <meta name="author" content={`${siteName} (${shortName})`} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      {canonical && <meta property="og:url" content={canonical} />}
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Structured Data for Google Site Name */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
}
