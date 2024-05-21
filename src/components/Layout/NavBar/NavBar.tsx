import { FC } from "react";
import st from "./NavBar.module.css";
import Link from "next/link";

interface NavBarProps {
  direction?: "vertical" | "horizontal";
}

const NavBar: FC<NavBarProps> = ({ direction = "horizontal" }) => {
  const sections = [
    {
      id: 0,
      title: "Хоккейные коробки",
      categories: [
        "Хоккейные корты",
        "Спортивный инвентарь",
        "Трибунный инвентарь",
        "Раздевалки",
        "Листовой стеклопластик",
      ],
    },
    {
      id: 1,
      title: "Скейт-парки",
      categories: [
        "Хоккейные корты",
        "Спортивный инвентарь",
        "Трибунный инвентарь",
        "Раздевалки",
        "Листовой стеклопластик",
      ],
    },
    {
      id: 2,
      title: "Уличное оборудование",
      categories: [
        "Хоккейные корты",
        "Спортивный инвентарь",
        "Трибунный инвентарь",
        "Раздевалки",
        "Листовой стеклопластик",
      ],
    },
    {
      id: 3,
      title: "Покрытия",
      categories: [
        "Хоккейные корты",
        "Спортивный инвентарь",
        "Трибунный инвентарь",
        "Раздевалки",
        "Листовой стеклопластик",
      ],
    },
    {
      id: 4,
      title: "Услуги",
      categories: [
        "Хоккейные корты",
        "Спортивный инвентарь",
        "Трибунный инвентарь",
        "Раздевалки",
        "Листовой стеклопластик",
      ],
    },
  ];

  if (direction === "vertical") {
    return (
      <nav className={st.NavBar_Vertical}>
        {sections.map((section) => (
          <Link className={st.Item} href={"/"} key={section.id}>
            {section.title}
          </Link>
        ))}
        <Link className={st.Item} href={"/"}>
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
      <div className={st.Item}>
        <p>О нас</p>
      </div>
    </nav>
  );
};

export default NavBar;
