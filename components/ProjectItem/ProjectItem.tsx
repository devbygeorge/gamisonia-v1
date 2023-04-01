import Image from "next/legacy/image";

import { urlFor } from "sanity";
import { Project, Translations } from "typings";

import s from "./ProjectItem.module.scss";

type Props = {
  project: Project;
  translations: Translations;
  setActiveProjectID: Function;
};

export default function ProjectItem({
  project,
  translations,
  setActiveProjectID,
}: Props) {
  return (
    <div>
      <div className={s.thumbnail}>
        <Image
          src={urlFor(project["image"][0]).url()}
          alt={project?.title}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <h4 className={s.title}>{project["title"]}</h4>
      <p className={s.description}>{project["description"]}</p>
      <button
        className={s.button}
        onClick={() => setActiveProjectID(project["_id"])}
      >
        {translations["more_details"]}
      </button>
    </div>
  );
}
