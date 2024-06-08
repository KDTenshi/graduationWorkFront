import { FC } from "react";
import st from "../NavBar.module.css";
import Link from "next/link";
import MailLink from "@/components/UI/MailLink/MailLink";
import PhoneLink from "@/components/UI/PhoneLink/PhoneLink";
import { TSection } from "@/Types";

interface VerticalProps {
  sections: TSection[];
}

const Vertical: FC<VerticalProps> = ({ sections }) => {
  return (
    <nav className={st.NavBar_Vertical}>
      {sections.map((section) => (
        <Link className={st.Item} href={`/sections/${section.id}`} key={section.id}>
          {section.title}
        </Link>
      ))}
      <Link className={st.Item} href={"/about"}>
        О нас
      </Link>
      <MailLink className={st.Item} />
      <PhoneLink className={st.Item} />
    </nav>
  );
};

export default Vertical;
