import { reviews } from "@/Fakeserver";
import { FC } from "react";
import st from "./ReviewsSlider.module.css";
import Slider from "./Parts/Slider";

const ReviewsSlider: FC = () => {
  return (
    <div className={st.Reviews}>
      <h2>Отзывы наших клиентов</h2>
      <Slider reviews={reviews} />
    </div>
  );
};

export default ReviewsSlider;
