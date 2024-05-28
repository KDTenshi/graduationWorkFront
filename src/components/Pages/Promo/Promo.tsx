import { FC } from "react";
import st from "./Promo.module.css";

const Promo: FC = () => {
  return (
    <div className={st.Promo}>
      <h2>Наш промо-ролик</h2>
      <div className={st.Wrap}>
        <iframe
          src="https://www.youtube.com/embed/Lx_1R5Tm2Oo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Promo;
