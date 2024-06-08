import { FC } from "react";
import st from "./Sections.module.css";
import Link from "next/link";
import Image from "next/image";
import { getSections } from "@/utils/getSections";
import { redirect } from "next/navigation";

const Sections: FC = async () => {
  const sections = await getSections();

  if (!sections) redirect("/");

  return (
    <div className={st.Sections}>
      {sections.map((section) => (
        <Link key={section.id} href={`/sections/${section.id}`} className={st.Section}>
          <Image src={section.img} alt={section.title} fill={true} />
          <p>{section.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default Sections;
