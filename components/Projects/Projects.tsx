import { useState } from "react";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ProjectItem from "@/components/ProjectItem";
import ProjectModal from "@/components/ProjectModal";
import { Project, Translations } from "typings";

import s from "./Projects.module.scss";

type Props = {
  projects: Project[];
  translations: Translations;
};

export default function Projects({ projects, translations }: Props) {
  const [activeProjectID, setActiveProjectID] = useState("");

  const interior = projects?.filter(
    (project) => project.category === "interior"
  );
  const architecture = projects?.filter(
    (project) => project.category === "architecture"
  );
  const object = projects?.filter((project) => project.category === "object");

  const renderProjectsByCategory = (
    categoryName: string,
    categoryProjects: Project[]
  ) => {
    return (
      <div>
        <h3 className={s.category_name}>{translations[categoryName]}</h3>
        <Swiper
          slidesPerView={1}
          navigation={true}
          modules={[Pagination, Navigation]}
          pagination={{
            type: "progressbar",
          }}
        >
          {categoryProjects?.map((project) => (
            <SwiperSlide key={project["_id"]}>
              <ProjectItem
                project={project}
                translations={translations}
                setActiveProjectID={setActiveProjectID}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

  return (
    <div id="projects" className={s.projects}>
      <h2 className="sr-only">{translations["projects"]}</h2>

      <div className="container">
        <div className={s.content}>
          {/* Interior Projects */}
          {renderProjectsByCategory("interior", interior)}

          {/* Architecture Projects */}
          {renderProjectsByCategory("architecture", architecture)}

          {/* Object Projects */}
          {renderProjectsByCategory("object", object)}
        </div>

        {projects?.map((project) => (
          <ProjectModal
            key={project["_id"]}
            project={project}
            translations={translations}
            activeProjectID={activeProjectID}
            setActiveProjectID={setActiveProjectID}
          />
        ))}
      </div>
    </div>
  );
}
