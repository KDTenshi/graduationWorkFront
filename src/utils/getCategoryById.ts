export async function getCategoryById(id: string) {
  try {
    const category = await fetch(`https://1ae6dad7db0c881d.mokky.dev/categories?id=${id}`).then((res) => res.json());

    return category;
  } catch (error) {
    console.error(error);
  }
}
