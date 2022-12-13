import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ProjectItem from "@/components/ProjectItem";
import { Project, Translations } from "typings";
import s from "./Projects.module.scss";
import ProjectDetails from "../ProjectDetails";
import { useState } from "react";

type Props = {
  projects: Project[];
  locale: string | undefined;
  translations: Translations;
};

export default function Projects({ projects, locale, translations }: Props) {
  const [activeProject, setActiveProject] = useState("");

  const interiorProjects = projects?.filter(
    (project) => project.category === "interior"
  );
  const architectureProjects = projects?.filter(
    (project) => project.category === "architecture"
  );
  const objectProjects = projects?.filter(
    (project) => project.category === "object"
  );

  return (
    <div id="projects" className={s.projects}>
      <div className="container">
        <div className={s.grid}>
          {/* Interior List */}
          <div className={s.grid_item}>
            <h3 className={`${s.type} ${locale === "ge" ? "fontBolnisi" : ""}`}>
              {translations.interior}
            </h3>
            <Swiper
              slidesPerView={1}
              navigation={true}
              modules={[Pagination, Navigation]}
              pagination={{
                type: "progressbar",
              }}
            >
              {interiorProjects?.map((project: Project) => (
                <SwiperSlide key={project._id}>
                  <ProjectItem
                    project={project}
                    locale={locale}
                    translations={translations}
                    setActiveProject={setActiveProject}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Architecture List */}
          <div className={s.grid_item}>
            <h3 className={`${s.type} ${locale === "ge" ? "fontBolnisi" : ""}`}>
              {translations.architecture}
            </h3>
            <Swiper
              slidesPerView={1}
              navigation={true}
              modules={[Pagination, Navigation]}
              pagination={{
                type: "progressbar",
              }}
            >
              {architectureProjects?.map((project: Project) => (
                <SwiperSlide key={project._id}>
                  <ProjectItem
                    project={project}
                    locale={locale}
                    translations={translations}
                    setActiveProject={setActiveProject}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Object List */}
          <div className={s.grid_item}>
            <h3 className={`${s.type} ${locale === "ge" ? "fontBolnisi" : ""}`}>
              {translations.object}
            </h3>
            <Swiper
              slidesPerView={1}
              navigation={true}
              modules={[Pagination, Navigation]}
              pagination={{
                type: "progressbar",
              }}
            >
              {objectProjects?.map((project: Project) => (
                <SwiperSlide key={project._id}>
                  <ProjectItem
                    project={project}
                    locale={locale}
                    translations={translations}
                    setActiveProject={setActiveProject}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {projects?.map((project) => (
          <div key={project._id} className="full-project">
            <ProjectDetails
              project={project}
              locale={locale}
              translations={translations}
              activeProject={activeProject}
              setActiveProject={setActiveProject}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
