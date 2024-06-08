import { TCategory } from "@/Types";

export async function getCategories(id = null) {
  try {
    const categories: TCategory[] = await fetch(`https://1ae6dad7db0c881d.mokky.dev/products?id=${id ? id : ""}`).then(
      (res) => res.json()
    );

    return categories;
  } catch (error) {
    console.error(error);
  }
}
