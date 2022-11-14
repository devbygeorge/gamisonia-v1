import s from "@/styles/About.module.scss";
import Image from "next/image";

export default function About() {
  return (
    <div id="about" className={s.about}>
      <h2 className="section-heading">about</h2>

      <div className={s.content}>
        <div className="container">
          <div className={s.text}>
            <span>Info..</span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam vitae, numquam possimus culpa labore maxime dolor eos
              libero iure? Ut hic reprehenderit, pariatur vel sint odit, unde,
              et provident enim eos blanditiis inventore alias consectetur
              voluptatem! Doloribus error velit, eligendi obcaecati modi hic
              repellendus illo earum totam aspernatur magnam dolor deleniti
              fugiat debitis. Sunt aperiam sequi recusandae commodi praesentium
              reiciendis.
            </p>
          </div>
          <div className={s.img}>
            <Image
              src="/images/author.jpg"
              alt="Author"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </div>
      </div>

      <div className={s.end}></div>
    </div>
  );
}
