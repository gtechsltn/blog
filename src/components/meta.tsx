import Head from "next/head";

const Meta = ({
  title,
  description,
  keywords,
  url,
  date,
  image,
}: any) => {
  return (
    <Head>
      <meta key="charSet" charSet="UTF-8" />
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta key="httpEquiv" httpEquiv="x-ua-compatible" content="ie=edge" />

      <meta key="title" name="title" content={title} />
      {description && (
        <meta key="description" name="description" content={description} />
      )}
      {keywords && <meta key="keywords" name="keywords" content={keywords} />}
      <meta key="author" name="author" content="Anto Subash" />

      {date && (
        <meta
          key="article:published_time"
          property="article:published_time"
          content={new Date(date).toISOString()}
        />
      )}

      <meta key="og:title" property="og:title" content={title} />
      <meta
        key="og:description"
        property="og:description"
        content={description}
      />
      <meta key="og:type" property="og:type" content="website" />
      {url && <meta key="og:url" property="og:url" content={url} />}

      {image && <meta key="og:image" property="og:image" content={image} />}
      {image && <meta key="image" property="image" content={image} />}
      {image && (
        <meta key="og:image:width" property="og:image:width" content="853" />
      )}
      {image && (
        <meta key="og:image:height" property="og:image:height" content="480" />
      )}

      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter:creator" name="twitter:creator" content="@antosubash" />
      <meta
        key="twitter:title"
        name="twitter:title"
        content={
          title
            ? `${title} | Anto Subash`
            : "Anto Subash"
        }
      />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={description}
      />
      {image && (
        <meta key="twitter:image" name="twitter:image" content={image} />
      )}

      {url && <link key="canonical" rel="canonical" href={url} />}

      <link
        key="apple-touch-icon"
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        key="icon32"
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        key="icon16"
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />

      <link key="manifest" rel="manifest" href="/site.webmanifest" />
      <link
        key="mask-icon"
        rel="mask-icon"
        href="/safari-pinned-tab.svg"
        color="#667eea"
      />
      <meta
        key="msapplication-TileColor"
        name="msapplication-TileColor"
        content="#667eea"
      />
      <meta key="theme-color" name="theme-color" content="#667eea" />

      <title key="pageTitle">
        {title
          ? `${title} | Anto | Anto Subash`
          : "Anto | Anto Subash"}{" "}
      </title>
    </Head>
  );
};

export default Meta;
