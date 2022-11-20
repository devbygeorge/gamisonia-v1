import Image from "next/legacy/image";
import { urlFor } from "sanity";
import s from "./Projects.module.scss";

export default function Projects({ projects }: any) {
  return (
    <div id="projects" className={s.projects}>
      <div className="container">
        <ul className={s.list}>
          {projects?.map((project: any) => (
            <li key={project._id} className={s.listItem}>
              <h3 className={s.type}>{project?.category}</h3>
              <div className={s.imgWrapper}>
                <Image
                  src={urlFor(project?.image).url()}
                  alt={project?.title}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>
              <h4 className={s.title}>{project?.title}</h4>
              <p className={s.desc}>{project?.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
