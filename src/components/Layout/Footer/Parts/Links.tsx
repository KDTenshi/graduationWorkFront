import { FC } from "react";
import st from "../Footer.module.css";
import Link from "next/link";
import { categories } from "@/Fakeserver";

const Links: FC = () => {
  return (
    <div className={st.Links}>
      {categories.map((category) => (
        <p key={category.id}>
          <Link href={"/"} className={st.Link}>
            {category.title}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default Links;
