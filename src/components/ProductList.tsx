import { type Product } from "../types";
import { ProductItem } from "./ProductItem";
import { memo } from "react";
import {
  FixedSizeList as List,
  type ListChildComponentProps,
} from "react-window";

interface ProductListProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const ProductList = memo(
  ({ products, onSelectProduct }: ProductListProps) => {
    console.log("🔴 [ProductList Render] Перемальовується весь список!");

    const Row = ({ index, style }) => (
      <div style={style}>
        <ProductItem product={products[index]} onSelect={onSelectProduct} />
      </div>
    );

    return (
      <div className="mt-4 max-h-[400px] overflow-y-auto border border-gray-300 rounded-lg bg-white shadow-sm">
        <List
          height={350}
          itemCount={products.length}
          itemSize={30}
          width="100%"
        >
          {Row}
        </List>
      </div>
    );
  },
);
