import Image from "next/legacy/image";
import { Translations, PageInfo } from "typings";
import { urlFor } from "sanity";
import s from "./About.module.scss";

type Props = {
  pageInfo: PageInfo;
  translations: Translations;
  locale: string | undefined;
};

export default function About({ pageInfo, translations, locale }: Props) {
  return (
    <div id="about" className={s.about}>
      <h2 className={`section-heading ${locale === "ge" ? "fontBolnisi" : ""}`}>
        {translations.about}
      </h2>

      <div className={s.content}>
        <div className="container">
          <div className={s.text}>
            <span className={locale === "ge" ? "fontBolnisi" : ""}>
              {pageInfo?.aboutTitle}
            </span>
            <p className={locale === "ge" ? "fontArial" : ""}>
              {pageInfo?.aboutInfo}
            </p>
          </div>
          <div className={s.img}>
            <Image
              src={urlFor(pageInfo?.aboutImage).url()}
              alt="Author"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
