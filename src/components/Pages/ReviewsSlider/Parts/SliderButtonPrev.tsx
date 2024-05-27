import { FC } from "react";
import st from "../ReviewsSlider.module.css";
import Image from "next/image";
import { useSwiper } from "swiper/react";
import Left from "/public/slider_left.svg";

const SliderButtonPrev: FC = () => {
  const swiper = useSwiper();

  return (
    <button className={[st.Button, st.Button_Prev].join(" ")} onClick={() => swiper.slidePrev()}>
      <Image src={Left} alt="Left" />
    </button>
  );
};

export default SliderButtonPrev;
