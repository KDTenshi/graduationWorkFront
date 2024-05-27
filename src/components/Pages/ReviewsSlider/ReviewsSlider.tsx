"use client";

import { reviews } from "@/Fakeserver";
import { FC } from "react";
import st from "./ReviewsSlider.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slider from "./Parts/Slider";

const ReviewsSlider: FC = () => {
  return (
    <div className={st.Reviews}>
      <h2>Наши проекты</h2>
      <Slider reviews={reviews} />
    </div>
  );
};

export default ReviewsSlider;
