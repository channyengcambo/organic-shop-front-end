import { createBrowserRouter } from "react-router-dom";
import { CustomerLayout } from "@/layouts/CustomerLayout";
import PageNotFound from "@/shared/components/PageNotFound";
import HomePage from "@/features/home/pages/HomePage";
import ShopPage from "@/features/shop/pages/ShopPage";

export const router = createBrowserRouter([
  {
    element: <CustomerLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        handle: {
          breadcrumb: "Home",
          hideBreadcrumb: true,
        },
      },
      {
        path: "/shop",
        element: <ShopPage />,
        handle: { breadcrumb: "Shop" },
      },
    ],
  },
]);
