import { useState } from "react";

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
  interior: Project[];
  architecture: Project[];
  object: Project[];
  socials: Social[];
};

export default function Home({
  pageInfo,
  interior,
  architecture,
  object,
  socials,
}: Props) {
  const [modalActive, setModalActive] = useState(false);
  const { locale } = useRouter();
  const translations = locale === "en" ? en : ge;

  return (
    <div className="snap">
      <div
        className="opacity"
        data-active={modalActive ? "true" : "false"}
      ></div>

      <div className="snap-start">
        <Header translations={translations} />
        <Hero pageInfo={pageInfo} />
      </div>

      <div className="snap-center">
        <Projects
          interior={interior}
          architecture={architecture}
          object={object}
          translations={translations}
          setModalActive={setModalActive}
        />
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
  const { pageInfo, interior, architecture, object, socials } =
    await res.json();

  return {
    props: {
      pageInfo,
      interior,
      architecture,
      object,
      socials,
    },
    revalidate: 60,
  };
};
