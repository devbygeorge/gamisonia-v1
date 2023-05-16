import { useState } from "react";

import Image from "next/legacy/image";

import { urlFor } from "sanity";
import { Project, Translations } from "typings";

import s from "./ProjectModal.module.scss";

type Props = {
  project: Project;
  translations: Translations;
  activeProjectID: string;
  setActiveProjectID: Function;
};

export default function ProjectModal({
  project,
  translations,
  activeProjectID,
  setActiveProjectID,
}: Props) {
  const [activeThumbIndex, setActiveThumbIndex] = useState(0);

  const { _id, title, category, description, image } = project;

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

  const closeProjectModal = () => {
    setActiveProjectID("");
  };

  return (
    <div
      className={s.project_modal}
      data-visible={_id === activeProjectID ? true : false}
    >
      <button className={s.close_button} onClick={closeProjectModal}>
        X
      </button>

      <div className={s.image_container}>
        <button className={s.chevron_button} onClick={handlePrevClick}>
          <div>
            <Image
              src="/images/icon-left.png"
              alt="Chevron left icon"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </button>
        {image?.map((item, i) => (
          <div
            key={i}
            className={s.image}
            data-visible={activeThumbIndex === i ? true : false}
          >
            <Image
              src={urlFor(item).url()}
              alt={title}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        ))}
        <button className={s.chevron_button} onClick={handleNextClick}>
          <div>
            <Image
              src="/images/icon-right.png"
              alt="Chevron right icon"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </button>
      </div>

      <div className={s.thumbs}>
        {image.map((item, i) => (
          <div
            key={i}
            className={s.thumb}
            data-visible={activeThumbIndex === i ? true : false}
          >
            <Image
              key={i}
              src={urlFor(item).url()}
              alt={title}
              layout="fill"
              objectFit="cover"
              quality={100}
              onClick={() => setActiveThumbIndex(i)}
            />
          </div>
        ))}
      </div>

      <div className={s.details}>
        <div className={s.detail_item}>
          <span>{translations["name"]}: </span>
          <p>{title}</p>
        </div>
        <div className={s.detail_item}>
          <span>{translations["category"]}: </span>
          <p>{translations[category]}</p>
        </div>
        <div className={s.detail_item}>
          <span>{translations["description"]}: </span>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
