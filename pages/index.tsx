import { GetStaticProps } from "next";
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
