import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ProjectItem from "@/components/ProjectItem";
import { Project, Translations } from "typings";
import s from "./Projects.module.scss";

type Props = {
  projects: Project[];
  locale: string | undefined;
  translations: Translations;
};

export default function Projects({ projects, locale, translations }: Props) {
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
              {projects?.map((project: Project) => (
                <SwiperSlide key={project._id}>
                  <ProjectItem
                    project={project}
                    locale={locale}
                    translations={translations}
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
              {projects?.map((project: Project) => (
                <SwiperSlide key={project._id}>
                  <ProjectItem
                    project={project}
                    locale={locale}
                    translations={translations}
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
              {projects?.map((project: Project) => (
                <SwiperSlide key={project._id}>
                  <ProjectItem
                    project={project}
                    locale={locale}
                    translations={translations}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
