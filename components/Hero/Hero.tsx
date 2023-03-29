import Image from "next/legacy/image";
import { PageInfo } from "typings";
import { urlFor } from "sanity";
import s from "./Hero.module.scss";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
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
          priority
        />
      </div>

      <div className={s.heading_wrapper}>
        <h1 className={s.heading}>
          <div className={s.heading_desktop}>
            <Image
              src="/images/hero-heading.svg"
              alt="gamisonia"
              width={442}
              height={57}
              objectFit="cover"
              quality={100}
              priority
            />
          </div>
          <div className={s.heading_mobile}>
            <Image
              src="/images/hero-heading-mobile.svg"
              alt="gamisonia"
              width={267}
              height={35}
              objectFit="cover"
              quality={100}
              priority
            />
          </div>
        </h1>
      </div>
    </div>
  );
}
