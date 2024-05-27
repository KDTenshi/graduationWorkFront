import { FC } from "react";
import st from "./PriceList.module.css";
import Link from "next/link";

const PriceList: FC = () => {
  return (
    <div className={st.PriceList}>
      <h2>Прайс-лист на нашу продукцию</h2>
      <form>
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

export default PriceList;
