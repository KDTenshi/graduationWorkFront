import { FC } from "react";
import st from "./Footer.module.css";
import Link from "next/link";
import Logo from "@/components/UI/Logo/Logo";
import { categories } from "@/Fakeserver";

const Footer: FC = () => {
  return (
    <footer className={st.Footer}>
      <div className={st.Wrap}>
        <div className={st.Contacts}>
          <Link href={"/"} className={st.Logo}>
            <Logo color="white" />
          </Link>
          <p>
            <Link href={"mailto:sales@alfagroup-sport.ru"} className={st.Contact} target="_blank">
              sales@alfagroup-sport.ru
            </Link>
          </p>
          <p>
            <Link href={"tel:+78332451646"} className={st.Contact} target="_blank">
              +7(8332)45-16-46
            </Link>
          </p>
        </div>
        <div className={st.Links}>
          {categories.map((category) => (
            <p key={category.id}>
              <Link href={"/"} className={st.Link}>
                {category.title}
              </Link>
            </p>
          ))}
        </div>
        <div className={st.Info}>
          <p>ООО &quot;АЛЬФА-ГРУПП&quot;</p>
          <p>610 035</p>
          <p>г. Киров, ул Потребкооперации, 17а</p>
          <p>Офис 202</p>
          <p>ОГРН: 1204300001982</p>
        </div>
      </div>
      <div className={st.Policy}>
        <Link href={"/"}>Политика конфиденциальности</Link>
      </div>
    </footer>
  );
};

export default Footer;
