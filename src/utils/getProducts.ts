import { TProduct } from "@/Types";

type OmitedProduct = Omit<TProduct, "parameters">;

interface ProductRes extends OmitedProduct {
  parameters: string;
}

export async function getProducts() {
  try {
    const productsRes: ProductRes[] = await fetch("https://1ae6dad7db0c881d.mokky.dev/products/").then((res) =>
      res.json()
    );
    const products: TProduct[] = productsRes.map((product) => ({
      ...product,
      parameters: product.parameters.split(";"),
    }));
    return products;
  } catch (error) {
    console.error(error);
  }
}
