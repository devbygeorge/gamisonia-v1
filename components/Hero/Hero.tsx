import Image from "next/legacy/image";
import s from "./Hero.module.scss";

export default function Hero() {
  return (
    <div id="hero" className={s.hero}>
      <div className={s.img}>
        <Image
          src="/images/interior.jpg"
          alt="Interior"
          layout="fill"
          objectFit="cover"
          objectPosition="center calc(50% - 6rem)"
          quality={100}
        />
      </div>

      <div className={`container ${s.textWrapper}`}>
        <h1 className={s.heading}>gamisonia</h1>
      </div>
    </div>
  );
}
