import { createBrowserRouter, RouterProvider } from "react-router";
import { Layout } from "./pages/layouts/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        lazy: async () => await import("./pages/home/HomePage"),
      },
      {
        path: "analytics",
        lazy: async () => await import("./pages/analytics/AnalyticsPage"),
      },
      {
        path: "settings",
        lazy: async () => await import("./pages/settings/SettingsPage"),
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
