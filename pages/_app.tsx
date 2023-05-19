import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>Gamisonia Design</title>
        <meta name="description" content="Portfolio of an interior designer" />
        <link rel="icon" href="/images/icon.svg" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://gamisonia.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gamisonia Design" />
        <meta
          property="og:description"
          content="Portfolio of an interior designer"
        />
        <meta property="og:image" content="/images/meta-image.jpg" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="gamisonia.com" />
        <meta property="twitter:url" content="https://gamisonia.com" />
        <meta name="twitter:title" content="Gamisonia Design" />
        <meta
          name="twitter:description"
          content="Portfolio of an interior designer"
        />
        <meta name="twitter:image" content="/images/meta-image.jpg" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
