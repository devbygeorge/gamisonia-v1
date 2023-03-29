import { useState } from "react";

import Image from "next/legacy/image";

import { urlFor } from "sanity";
import { Project, Translations } from "typings";

import s from "./ProjectDetails.module.scss";

type Props = {
  project: Project;
  translations: Translations;
  activeProject: string;
  setActiveProject: Function;
};

export default function ProjectDetails({
  project,
  translations,
  activeProject,
  setActiveProject,
}: Props) {
  const [activeThumbIndex, setActiveThumbIndex] = useState(0);

  const { title, category, description, image } = project;

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
              src="/images/chevron-right.png"
              alt="Left Arrow"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </button>
        {image?.map((imageItem, index) => (
          <div
            key={index}
            className={`${s.imageItem} ${
              activeThumbIndex === index ? s.active : ""
            }`}
          >
            <Image
              src={urlFor(imageItem).url()}
              alt={title}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        ))}
        <button className={s.chevron_button} onClick={handleNextClick}>
          <div className={s.chevron_cont}>
            <Image
              src="/images/chevron-right.png"
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
          <div
            key={index}
            className={`${s.thumb_item} ${
              activeThumbIndex === index ? s.active : ""
            }`}
          >
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
          <span>{translations["name"]}: </span>
          <p>{title}</p>
        </div>
        <div className={s.info_item}>
          <span>{translations["category"]}: </span>
          <p>{translations[category]}</p>
        </div>
        <div className={s.info_item}>
          <span>{translations["description"]}: </span>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
