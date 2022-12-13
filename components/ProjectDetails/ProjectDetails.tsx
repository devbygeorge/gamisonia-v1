import Image from "next/legacy/image";
import { Project, Translations } from "typings";
import { urlFor } from "sanity";
import s from "./ProjectDetails.module.scss";
import { useState } from "react";

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
        <Image
          src={urlFor(project.image[activeThumbIndex]).url()}
          alt={project?.title}
          width={700}
          height={600}
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className={s.image_thumbs}>
        {project?.image.map((image, index) => (
          <Image
            key={index}
            src={urlFor(image).url()}
            alt={project?.title}
            width={150}
            height={150}
            objectFit="cover"
            quality={100}
            onClick={() => setActiveThumbIndex(index)}
          />
        ))}
      </div>

      <div className={s.project_info}>
        <div className={s.info_item}>
          <span>{translations.product_name}: </span>
          <h4>{project.title}</h4>
        </div>
        <div className={s.info_item}>
          <span>{translations.product_category}: </span>
          <h3>{project.category}</h3>
        </div>
        <div className={s.info_item}>
          <span>{translations.product_description}: </span>
          <h3>{project.description}</h3>
        </div>
      </div>
    </div>
  );
}
