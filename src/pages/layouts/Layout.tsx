import { Link, Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 font-sans text-gray-900">
      <header className="mb-6 border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          ⚡ React Performance Demo{" "}
          <span className="text-sm font-normal text-gray-500">
            (React Router v8 + Tailwind + TS)
          </span>
        </h1>

        <nav className="flex gap-4 mt-4 text-sm font-semibold">
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            🏠 Головна
          </Link>
          <Link
            to="/analytics"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            📊 Аналітика
          </Link>
          <Link
            to="/settings"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            ⚙️ Налаштування
          </Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};
