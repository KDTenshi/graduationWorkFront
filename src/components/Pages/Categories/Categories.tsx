import { TCategory } from "@/Types";
import { FC } from "react";
import st from "./Categories.module.css";
import Link from "next/link";
import { getCategories } from "@/utils/getCategories";

interface CategoriesProps {
  categories: TCategory[];
}

const Categories: FC<CategoriesProps> = async ({ categories }) => {
  return (
    <div className={st.Categories}>
      {categories.map((category) => (
        <Link href={`/categories/${category.id}`} key={category.id}>
          {category.title}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
