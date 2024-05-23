import { FC } from "react";
import { sections } from "@/Fakeserver";
import st from "./SectionsBlock.module.css";
import Link from "next/link";
import Image from "next/image";

const SectionsBlock: FC = () => {
  return (
    <div className={st.Sections}>
      {sections.map((section) => (
        <Link key={section.id} href={"/"} className={st.Section}>
          <Image src={"/banner_prev.png"} alt={section.title} fill={true} />
          <p>{section.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default SectionsBlock;
