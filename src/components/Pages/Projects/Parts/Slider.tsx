"use client";

import { FC } from "react";
import st from "../Projects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import SliderButtonNext from "./SliderButtonNext";
import SliderButtonPrev from "./SliderButtonPrev";

interface SliderProps {
  projects: { title: string; preview: string; video: string; place: string }[];
}

const Slider: FC<SliderProps> = ({ projects }) => {
  return (
    <Swiper
      className={st.SLider}
      loop={true}
      slidesPerView={1}
      spaceBetween={25}
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
          <Link href={project.video}>
            <p>{project.title}</p>
            <p>{project.place}</p>
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
