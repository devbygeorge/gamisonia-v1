import Image from "next/legacy/image";
import { Project, Translations } from "typings";
import { urlFor } from "sanity";
import { useState } from "react";
import s from "./ProjectDetails.module.scss";

type Props = {
  project: Project;
  locale: string | undefined;
  translations: Translations;
  activeProject: string;
  setActiveProject: Function;
};

export default function ProjectDetails({
  project,
  locale,
  translations,
  activeProject,
  setActiveProject,
}: Props) {
  const [activeThumbIndex, setActiveThumbIndex] = useState(0);

  const { title, category, description, image } = project;
  const { name_label, category_label, description_label } = translations;

  const handlePrevClick = () => {
    setActiveThumbIndex((state) =>
      state === 0 ? image.length - 1 : state - 1
    );
  };
  const handleNextClick = () => {
    setActiveThumbIndex((state) =>
      state === image.length - 1 ? 0 : state + 1
    );
  };

  return (
    <div
      className={`${s.project_details} ${
        project._id === activeProject ? s.active : ""
      }`}
    >
      <div onClick={() => setActiveProject("")} className={s.close_icon}>
        X
      </div>

      <div className={s.main_image}>
        <button className={s.chevron_button} onClick={handlePrevClick}>
          <div className={s.chevron_cont}>
            <Image
              src="/images/chevron.png"
              alt="Left Arrow"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </button>
        {image?.map((imageItem, index) => (
          <div
            className={`${s.imageItem} ${
              activeThumbIndex === index ? s.active : ""
            }`}
          >
            <Image
              src={urlFor(imageItem).url()}
              alt={title}
              width={700}
              height={600}
              objectFit="cover"
              quality={100}
            />
          </div>
        ))}
        <button className={s.chevron_button} onClick={handleNextClick}>
          <div className={s.chevron_cont}>
            <Image
              src="/images/chevron.png"
              alt="Right Arrow"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </button>
      </div>

      <div className={s.image_thumbs}>
        {project?.image.map((image, index) => (
          <div className={s.thumb_item}>
            <Image
              key={index}
              src={urlFor(image).url()}
              alt={title}
              layout="fill"
              objectFit="cover"
              quality={100}
              onClick={() => setActiveThumbIndex(index)}
            />
          </div>
        ))}
      </div>

      <div className={s.project_info}>
        <div className={s.info_item}>
          <span>{name_label}: </span>
          <h4 className={locale === "ge" ? "fontBolnisi" : ""}>{title}</h4>
        </div>
        <div className={s.info_item}>
          <span>{category_label}: </span>
          <h3 className={locale === "ge" ? "fontBolnisi" : ""}>
            {translations[category as keyof typeof translations]}
          </h3>
        </div>
        <div className={s.info_item}>
          <span className={s.desc_label}>{description_label}: </span>
          <p className={`${locale === "ge" ? "fontArial" : ""} ${s.desc}`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
