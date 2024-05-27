import { FC } from "react";
import st from "./Request.module.css";
import Link from "next/link";

const Request: FC = () => {
  return (
    <div className={st.Request}>
      <h2>Оставьте заявку сегодня</h2>
      <h3>И закрепите за собой скидку в 12%</h3>
      <form>
        <input type="text" placeholder="Введите ваше имя" required />
        <input type="email" placeholder="Введите ваш e-mail" required />
        <input type="text" placeholder="+7(999) 999-99-99" required />
        <button type="submit">Оставить заявку</button>
        <p>
          Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с{" "}
          <Link href={"/"}>политикой конфиденциальности</Link>.
        </p>
      </form>
    </div>
  );
};

export default Request;
