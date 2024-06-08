import { TCategory, TSection } from "@/Types";

export async function getSectionById(id: string) {
  try {
    const section: TSection = await fetch(`https://1ae6dad7db0c881d.mokky.dev/sections?id=${id}`).then((res) =>
      res.json()
    );
    const categories: TCategory[] = await fetch("https://1ae6dad7db0c881d.mokky.dev/categories").then((res) =>
      res.json()
    );

    section.categories = categories.filter((category) => category.sectionId === section.id);
    return section;
  } catch (error) {
    console.error(error);
  }
}
