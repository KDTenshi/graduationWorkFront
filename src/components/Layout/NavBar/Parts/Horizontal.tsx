import { FC } from "react";
import st from "../NavBar.module.css";
import Link from "next/link";
import { TSection } from "@/Types";

interface HorizontalProps {
  sections: TSection[];
}

const Horizontal: FC<HorizontalProps> = ({ sections }) => {
  return (
    <nav className={st.NavBar}>
      {sections.map((section) => (
        <div className={st.Item} key={section.id}>
          <p>{section.title}</p>
          <div className={st.Dropdown}>
            {section.categories.map((category) => (
              <Link href={`/categories/${category.id}`} className={st.Link} key={category.id}>
                {category.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
      <Link href={"/about"} className={st.About}>
        О нас
      </Link>
    </nav>
  );
};

export default Horizontal;
