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

      {/* <div className={`container ${s.textWrapper}`}> */}
      <h1 className={s.heading}>gamisonia</h1>
      {/* </div> */}
    </div>
  );
}
