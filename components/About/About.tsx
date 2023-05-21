import Image from "next/legacy/image";

import { urlFor } from "sanity";
import { PageInfo, Translations } from "typings";

import s from "./About.module.scss";

type Props = {
  pageInfo: PageInfo;
  translations: Translations;
};

export default function About({ pageInfo, translations }: Props) {
  return (
    <section id="about" className={s.about}>
      <h2 className="section-title">{translations["about"]}</h2>

      <div className={`container ${s.content}`}>
        <div className={s.left_col}>
          <h3 className={s.content_title}>{pageInfo["aboutTitle"]}</h3>
          <p>{pageInfo["aboutInfo"]}</p>
        </div>
        <div className={s.right_col}>
          <Image
            src={urlFor(pageInfo["aboutImage"]).url()}
            alt={pageInfo["aboutImage"]["description"]}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
}
