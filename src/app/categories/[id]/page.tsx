import { TCategory, TSection } from "@/Types";
import Benefits from "@/components/Pages/Benefits/Benefits";
import Products from "@/components/Pages/Products/Products";
import SectionBanner from "@/components/Pages/SectionBanner/SectionBanner";
import { getCategoryById } from "@/utils/getCategoryById";
import { getProducts } from "@/utils/getProducts";
import { getSectionById } from "@/utils/getSectionById";
import { redirect } from "next/navigation";
import { FC } from "react";

interface CategoryPageProps {
  params: {
    id: string;
  };
}

const CategoryPage: FC<CategoryPageProps> = async ({ params }) => {
  const category: TCategory = await getCategoryById(params.id);
  const section = await getSectionById(category.sectionId as string);
  const products = await getProducts();

  if (!category || !section || !products) redirect("/");

  return (
    <main>
      <SectionBanner section={section} />
      <Products products={products} />
      <Benefits />
    </main>
  );
};

export default CategoryPage;
