import { GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { en, ge } from "translations";
import { PageInfo, Project, Social } from "typings";

type Props = {
  pageInfo: PageInfo;
  projects: Project[];
  socials: Social[];
};

export default function Home({ pageInfo, projects, socials }: Props) {
  const { locale } = useRouter();
  const translations = locale === "en" ? en : ge;

  return (
    <div className="snap">
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>Gamisonia Design</title>
        <meta name="description" content="Portfolio of an interior designer" />
        <link rel="icon" href="/images/icon.png" />

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

      <div className="snap-start">
        <Header translations={translations} />
        <Hero pageInfo={pageInfo} />
      </div>

      <div className="snap-center">
        <Projects projects={projects} translations={translations} />
      </div>
      <div className="snap-center">
        <About pageInfo={pageInfo} translations={translations} />
      </div>
      <div className="snap-center">
        <Contact pageInfo={pageInfo} translations={translations} />
      </div>

      <div className="snap-end">
        <Footer socials={socials} />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/data`, {
    method: "post",
    body: JSON.stringify({
      locale: locale,
    }),
  });
  const { pageInfo, projects, socials } = await res.json();

  return {
    props: {
      pageInfo,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
