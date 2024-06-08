import { FC } from "react";
import st from "./SectionBanner.module.css";
import { TSection } from "@/Types";
import Image from "next/image";
import Link from "next/link";

interface SectionBannerProps {
  section: TSection;
}

const SectionBanner: FC<SectionBannerProps> = ({ section }) => {
  return (
    <div className={st.Banner}>
      <div className={st.Image}>
        <Image src={section.img} fill sizes="100%" alt={section.title} />
        <h3>{section.description}</h3>
      </div>
      <form className={st.Form}>
        <h3>Узнать цену прямо сейчас</h3>
        <input type="text" placeholder="Введите ваше имя" required />
        <input type="email" placeholder="Введите ваш e-mail" required />
        <input type="text" placeholder="+7(999) 999-99-99" required />
        <button type="submit">Получить прайс</button>
        <p>
          Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с{" "}
          <Link href={"/"}>политикой конфиденциальности</Link>.
        </p>
      </form>
    </div>
  );
};

export default SectionBanner;
