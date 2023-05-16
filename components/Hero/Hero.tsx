import Image from "next/legacy/image";

import { urlFor } from "sanity";
import { PageInfo } from "typings";

import s from "./Hero.module.scss";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  return (
    <div id="hero" className={s.hero}>
      <div className={s.background_image}>
        <Image
          src={urlFor(pageInfo["heroImage"]).url()}
          alt="Interior image from database"
          layout="fill"
          objectFit="cover"
          objectPosition="center calc(50% - 6rem)"
          quality={100}
          priority
        />
      </div>

      <h1 className={s.heading}>
        <div className="flex-mobile">
          <Image
            src="/images/hero-heading-m.png"
            alt="Gamisonia"
            width={267}
            height={35}
            objectFit="cover"
            quality={100}
            priority
          />
        </div>
        <div className="flex-desktop">
          <Image
            src="/images/hero-heading.png"
            alt="Gamisonia"
            width={442}
            height={57}
            objectFit="cover"
            quality={100}
            priority
          />
        </div>
      </h1>
    </div>
  );
}
