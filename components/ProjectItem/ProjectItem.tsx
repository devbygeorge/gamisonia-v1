import Image from "next/legacy/image";

import { urlFor } from "sanity";
import { Project, Translations } from "typings";

import s from "./ProjectItem.module.scss";

type Props = {
  project: Project;
  translations: Translations;
  setActiveProject: Function;
  setModalActive: Function;
};

export default function ProjectItem({
  project,
  translations,
  setActiveProject,
  setModalActive,
}: Props) {
  return (
    <div>
      <div className={s.thumbnail}>
        <Image
          src={urlFor(project["image"][0]).url()}
          alt={project["image"][0]["description"]}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <h4 className={s.title}>{project["title"]}</h4>
      <p className={s.description}>{project["description"]}</p>
      <button
        className={s.button}
        onClick={() => {
          setActiveProject(project);
          setModalActive(true);
        }}
      >
        {translations["more_details"]}
      </button>
    </div>
  );
}
