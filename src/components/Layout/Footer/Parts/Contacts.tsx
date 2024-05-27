import { FC } from "react";
import st from "../Footer.module.css";
import Logo from "@/components/UI/Logo/Logo";
import MailLink from "@/components/UI/MailLink/MailLink";
import PhoneLink from "@/components/UI/PhoneLink/PhoneLink";

const Contacts: FC = () => {
  return (
    <div className={st.Contacts}>
      <Logo color="white" />
      <p>
        <MailLink className={st.Contact} />
      </p>
      <p>
        <PhoneLink className={st.Contact} />
      </p>
    </div>
  );
};

export default Contacts;
