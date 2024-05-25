import { FC } from "react";
import st from "./NavBar.module.css";
import Link from "next/link";
import { sections } from "@/Fakeserver";

interface NavBarProps {
  direction?: "vertical" | "horizontal";
}

const NavBar: FC<NavBarProps> = ({ direction = "horizontal" }) => {
  if (direction === "vertical") {
    return (
      <nav className={st.NavBar_Vertical}>
        {sections.map((section) => (
          <Link className={st.Item} href={"/"} key={section.id}>
            {section.title}
          </Link>
        ))}
        <Link className={st.Item} href={"/about"}>
          О нас
        </Link>
        <Link href={"mailto:sales@alfagroup-sport.ru"} className={st.Item}>
          sales@alfagroup-sport.ru
        </Link>
        <Link href={"tel:+78332451646"} className={st.Item}>
          +7(8332)45-16-46
        </Link>
      </nav>
    );
  }

  return (
    <nav className={st.NavBar}>
      {sections.map((section) => (
        <div className={st.Item} key={section.id}>
          <p>{section.title}</p>
          <div className={st.Dropdown}>
            {section.categories.map((category) => (
              <Link href={"/"} className={st.Link} key={category}>
                {category}
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

export default NavBar;
