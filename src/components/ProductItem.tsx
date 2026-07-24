import { type Product } from "../types";

interface ProductItemProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductItem = ({ product, onSelect }: ProductItemProps) => {
  console.log(`🔴 [ProductItem Render]: ID ${product.id}`);

  // Штучно додаємо затримку 0.5мс для симуляції складного карткового UI
  const start = performance.now();
  while (performance.now() - start < 0.5) {}

  return (
    <div className="flex items-center justify-between p-3 border-b border-gray-200 hover:bg-gray-50 transition-colors">
      <span className="text-gray-800">
        {product.name} —{" "}
        <strong className="text-blue-600">${product.price}</strong>
      </span>
      <button
        onClick={() => onSelect(product)}
        className="px-3 py-1 bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 text-sm font-medium rounded-md transition-colors"
      >
        Вибрати
      </button>
    </div>
  );
};
