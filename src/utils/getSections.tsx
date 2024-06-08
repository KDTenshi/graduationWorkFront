import { TCategory, TSection } from "@/Types";

export async function getSections() {
  try {
    const sections: TSection[] = await fetch("https://1ae6dad7db0c881d.mokky.dev/sections").then((res) => res.json());
    const categories: TCategory[] = await fetch("https://1ae6dad7db0c881d.mokky.dev/categories").then((res) =>
      res.json()
    );

    const sectionsWithCategories = sections.map((section) => ({
      ...section,
      categories: categories.filter((category) => category.sectionId == section.id),
    }));

    return sectionsWithCategories as TSection[];
  } catch (error) {
    console.error(error);
  }
}
