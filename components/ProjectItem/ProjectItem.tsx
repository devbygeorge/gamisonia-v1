import Image from "next/legacy/image";

import { urlFor } from "sanity";
import { Project, Translations } from "typings";

import s from "./ProjectItem.module.scss";

type Props = {
  project: Project;
  translations: Translations;
  setActiveProject: Function;
};

export default function ProjectItem({
  project,
  translations,
  setActiveProject,
}: Props) {
  return (
    <div className={s.project_item}>
      <div className={s.image_wrapper}>
        <Image
          src={urlFor(project?.image[0]).url()}
          alt={project?.title}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <h4 className={s.title}>{project?.title}</h4>
      <p className={s.description}>{project?.description}</p>
      <button
        onClick={() => setActiveProject(project._id)}
        className={s.button}
      >
        {translations["more_details"]}
      </button>
    </div>
  );
}
