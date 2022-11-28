import Image from "next/legacy/image";
import { urlFor } from "sanity";
import s from "./About.module.scss";

type Props = {
  pageInfo: any;
  translations: {
    about: string;
  };
};

export default function About({ pageInfo, translations }: Props) {
  return (
    <div id="about" className={s.about}>
      <h2 className="section-heading">{translations.about}</h2>

      <div className={s.content}>
        <div className="container">
          <div className={s.text}>
            <span>{pageInfo?.aboutTitle}</span>
            <p>{pageInfo?.aboutInfo}</p>
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
