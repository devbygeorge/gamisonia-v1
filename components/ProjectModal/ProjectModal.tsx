import { useState } from "react";

import Image from "next/legacy/image";
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { urlFor } from "sanity";
import { Project, Translations } from "typings";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import s from "./ProjectModal.module.scss";

type Props = {
  activeProject: Project;
  setActiveProject: Function;
  translations: Translations;
  setModalActive: Function;
};

export default function ProjectModal({
  activeProject,
  setActiveProject,
  translations,
  setModalActive,
}: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const { title, category, description, image } = activeProject;

  const closeProjectModal = () => {
    setActiveProject(null);
    setModalActive(false);
  };

  return (
    <div className={s.project_modal}>
      <button
        className={s.close_button}
        onClick={closeProjectModal}
        aria-label="Close Button"
      >
        <span className={s.close_button_bar}></span>
        <span className={s.close_button_bar}></span>
      </button>

      <Swiper
        className={s.main_swiper}
        slidesPerView={1}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, Navigation, Thumbs]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {image?.map((item, i) => (
          <SwiperSlide key={i} className={s.main_image}>
            <Image
              src={urlFor(item).url()}
              alt={title}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={6}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
        className={s.thumbs}
        breakpoints={{
          400: {
            slidesPerView: 4,
          },
        }}
      >
        {image.map((item, i) => (
          <SwiperSlide key={i} className={s.thumb}>
            <Image
              key={i}
              src={urlFor(item).url()}
              alt={title}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={s.details}>
        <div className={s.detail_item}>
          <span>{translations["name"]}: </span>
          <p>{title}</p>
        </div>
        <div className={s.detail_item}>
          <span>{translations["category"]}: </span>
          <p>{translations[category]}</p>
        </div>
        <div className={s.detail_item}>
          <span>{translations["description"]}: </span>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
