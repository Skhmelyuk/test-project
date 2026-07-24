import { type Product } from "../types";
import { ProductItem } from "./ProductItem";

interface ProductListProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const ProductList = ({
  products,
  onSelectProduct,
}: ProductListProps) => {
  console.log("🔴 [ProductList Render] Перемальовується весь список!");

  return (
    <div className="mt-4 max-h-[400px] overflow-y-auto border border-gray-300 rounded-lg bg-white shadow-sm">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onSelect={onSelectProduct}
        />
      ))}
    </div>
  );
};
