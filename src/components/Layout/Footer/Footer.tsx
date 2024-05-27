import { FC } from "react";
import st from "./Footer.module.css";
import Link from "next/link";
import Contacts from "./Parts/Contacts";
import Info from "./Parts/Info";
import Links from "./Parts/Links";

const Footer: FC = () => {
  return (
    <footer className={st.Footer}>
      <div className={st.Wrap}>
        <Contacts />
        <Links />
        <Info />
      </div>
      <div className={st.Policy}>
        <Link href={"/"}>Политика конфиденциальности</Link>
      </div>
    </footer>
  );
};

export default Footer;
