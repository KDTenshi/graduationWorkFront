import { FC } from "react";
import st from "./Products.module.css";
import { TProduct } from "@/Types";

interface ProductsProps {
  products: TProduct[];
}

const Products: FC<ProductsProps> = ({ products }) => {
  return (
    <div className={st.Products}>
      {products.map((product) => (
        <div key={product.id} className={st.Product}>
          <h3>{product.title}</h3>
          <p>{product.price.toLocaleString("ru-RU")} Руб.</p>
          <div className={st.Params}>
            {product.parameters.map((param) => (
              <p key={param}>{param}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
