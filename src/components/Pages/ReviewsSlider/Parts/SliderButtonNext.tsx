import { FC } from "react";
import st from "../ReviewsSlider.module.css";
import Image from "next/image";
import { useSwiper } from "swiper/react";
import Right from "/public/slider_right.svg";

const SliderButtonNext: FC = () => {
  const swiper = useSwiper();

  return (
    <button className={[st.Button, st.Button_Next].join(" ")} onClick={() => swiper.slideNext()}>
      <Image src={Right} alt="Right" />
    </button>
  );
};

export default SliderButtonNext;
