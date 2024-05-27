import { FC } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import st from "../ReviewsSlider.module.css";
import SliderButtonPrev from "./SliderButtonPrev";
import SliderButtonNext from "./SliderButtonNext";

interface SliderProps {
  reviews: { img: string }[];
}

const Slider: FC<SliderProps> = ({ reviews }) => {
  return (
    <Swiper
      slidesPerView={1}
      pagination={true}
      modules={[Pagination]}
      spaceBetween={25}
      loop={true}
      className={st.Slider}
      breakpoints={{
        1400: {
          slidesPerView: 4,
        },
        1100: {
          slidesPerView: 3,
        },
        800: {
          slidesPerView: 2,
        },
      }}
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.img}>
          <div className={st.Slide}>
            <img src={review.img} alt="Review" />
          </div>
        </SwiperSlide>
      ))}
      <SliderButtonNext />
      <SliderButtonPrev />
    </Swiper>
  );
};

export default Slider;
