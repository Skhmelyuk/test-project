import { useState } from "react";
import { type Product } from "../../types";
import { ProductList } from "../../components/ProductList";

// Генеруємо 1 000 елементів з явним типом
const initialProducts: Product[] = Array.from({ length: 1000 }, (_, index) => ({
  id: index + 1,
  name: `Товар №${index + 1}`,
  price: Math.floor(Math.random() * 1000) + 10,
}));

export const HomePage = () => {
  const [count, setCount] = useState<number>(0);
  const [query, setQuery] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // 1. Повільна фільтрація без useMemo
  console.log("🔍 Фільтрація товарів...");
  const filteredProducts: Product[] = initialProducts.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase()),
  );

  // 2. Повільна функція без useCallback
  const handleSelectProduct = (product: Product): void => {
    setSelectedProduct(product);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800">🏠 Каталог товарів</h2>

      <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-between">
        <div>
          <span className="text-sm text-blue-600 font-semibold uppercase">
            Стан компонента
          </span>
          <h3 className="text-lg font-bold text-blue-900">Кліків: {count}</h3>
        </div>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg shadow-sm transition-all active:scale-95"
        >
          ➕ Збільшити count
        </button>
      </div>

      <div>
        <input
          type="text"
          placeholder="🔍 Пошук товару..."
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
        />
      </div>

      {selectedProduct && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-sm">
          ✅ Вибрано: <strong>{selectedProduct.name}</strong>
        </div>
      )}

      <ProductList
        products={filteredProducts}
        onSelectProduct={handleSelectProduct}
      />
    </div>
  );
};
