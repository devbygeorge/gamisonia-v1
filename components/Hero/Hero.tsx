import Image from "next/legacy/image";
import { urlFor } from "sanity";
import s from "./Hero.module.scss";

export default function Hero({ pageInfo }: any) {
  return (
    <div id="hero" className={s.hero}>
      <div className={s.img}>
        <Image
          src={urlFor(pageInfo?.heroImage).url()}
          alt="Interior"
          layout="fill"
          objectFit="cover"
          objectPosition="center calc(50% - 6rem)"
          quality={100}
        />
      </div>

      <div className={`container ${s.textWrapper}`}>
        <h1 className={s.heading}>{pageInfo?.heroTitle}</h1>
      </div>
    </div>
  );
}
