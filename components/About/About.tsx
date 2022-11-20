import Image from "next/legacy/image";
import { urlFor } from "sanity";
import s from "./About.module.scss";

export default function About({ pageInfo }: any) {
  return (
    <div id="about" className={s.about}>
      <h2 className="section-heading">about</h2>

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
