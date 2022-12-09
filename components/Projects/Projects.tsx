import Image from "next/legacy/image";
import { Project } from "typings";
import { urlFor } from "sanity";
import s from "./Projects.module.scss";

type Props = {
  projects: Project[];
  locale: string | undefined;
};

export default function Projects({ projects, locale }: Props) {
  return (
    <div id="projects" className={s.projects}>
      <div className="container">
        <ul className={s.list}>
          {projects?.map((project: any) => (
            <li key={project._id} className={s.listItem}>
              <h3
                className={`${s.type} ${locale === "ge" ? "fontBolnisi" : ""}`}
              >
                {project?.category}
              </h3>
              <div className={s.imgWrapper}>
                <Image
                  src={urlFor(project?.image).url()}
                  alt={project?.title}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>
              <h4
                className={`${s.title} ${locale === "ge" ? "fontBolnisi" : ""}`}
              >
                {project?.title}
              </h4>
              <p className={`${s.desc} ${locale === "ge" ? "fontArial" : ""}`}>
                {project?.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
