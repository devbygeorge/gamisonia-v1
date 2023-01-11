import Image from "next/legacy/image";
import { Project, Translations } from "typings";
import { urlFor } from "sanity";
import s from "./ProjectItem.module.scss";

type Props = {
  project: Project;
  locale: string | undefined;
  translations: Translations;
  setActiveProject: Function;
};

export default function ProjectItem({
  project,
  locale,
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
      <h4 className={`${s.title} ${locale === "ge" ? "fontArchyBold" : ""}`}>
        {project?.title}
      </h4>
      <p className={s.description}>{project?.description}</p>
      <button
        onClick={() => setActiveProject(project._id)}
        className={`${s.button} ${locale === "ge" ? "fontArchyBold" : ""}`}
      >
        {translations.more_details}
      </button>
    </div>
  );
}
