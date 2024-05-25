import { FC } from "react";
import st from "./Footer.module.css";
import Link from "next/link";
import Logo from "@/components/UI/Logo/Logo";
import { categories } from "@/Fakeserver";
import MailLink from "@/components/UI/MailLink/MailLink";
import PhoneLink from "@/components/UI/PhoneLink/PhoneLink";

const Footer: FC = () => {
  return (
    <footer className={st.Footer}>
      <div className={st.Wrap}>
        <div className={st.Contacts}>
          <Link href={"/"} className={st.Logo}>
            <Logo color="white" />
          </Link>
          <p>
            <MailLink className={st.Contact} />
          </p>
          <p>
            <PhoneLink className={st.Contact} />
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
