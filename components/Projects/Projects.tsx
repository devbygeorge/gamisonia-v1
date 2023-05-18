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
  interior: Project[];
  architecture: Project[];
  object: Project[];
  translations: Translations;
  setModalActive: Function;
};

export default function Projects({
  interior,
  architecture,
  object,
  translations,
  setModalActive,
}: Props) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const renderProjectsByCategory = (
    categoryName: string,
    categoryProjects: Project[]
  ) => {
    return (
      <div className="project-item">
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
                setActiveProject={setActiveProject}
                setModalActive={setModalActive}
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

        {activeProject && (
          <ProjectModal
            activeProject={activeProject}
            setActiveProject={setActiveProject}
            translations={translations}
            setModalActive={setModalActive}
          />
        )}
      </div>
    </div>
  );
}
