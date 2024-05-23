import { FC } from "react";
import st from "./Banner.module.css";

const Banner: FC = () => {
  return (
    <div className={st.Banner}>
      <video autoPlay muted loop poster="/banner_prev.png">
        <source src="/banner.mp4" type="video/mp4" />
      </video>
      <div className={st.Info}>
        <h1>Альфа групп</h1>
        <h2>Спорт должен приносить удовольствие и быть безопасным</h2>
      </div>
    </div>
  );
};

export default Banner;
