"use client";

import { FC } from "react";
import st from "../Projects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import SliderButtonNext from "./SliderButtonNext";
import SliderButtonPrev from "./SliderButtonPrev";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

interface SliderProps {
  projects: { title: string; preview: string; video: string; place: string }[];
}

const Slider: FC<SliderProps> = ({ projects }) => {
  return (
    <Swiper
      className={st.Slider}
      loop={true}
      slidesPerView={1}
      spaceBetween={25}
      pagination={true}
      modules={[Pagination]}
      breakpoints={{
        1000: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 3,
        },
      }}
    >
      {projects.map((project) => (
        <SwiperSlide key={project.video} className={st.Slide}>
          <Link href={project.video} target="_blank">
            <p>{project.place}</p>
            <p>{project.title}</p>
            <Image src={project.preview} fill={true} alt="Preview" sizes="100%" />
          </Link>
        </SwiperSlide>
      ))}
      <SliderButtonNext />
      <SliderButtonPrev />
    </Swiper>
  );
};

export default Slider;
