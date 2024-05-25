import { FC } from "react";
import st from "../Header.module.css";
import PhoneLink from "@/components/UI/PhoneLink/PhoneLink";
import MailLink from "@/components/UI/MailLink/MailLink";

const Links: FC = () => {
  return (
    <div className={st.Links}>
      <MailLink className={st.Link} />
      <PhoneLink className={st.Link} />
    </div>
  );
};

export default Links;
