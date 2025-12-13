import { createBrowserRouter } from "react-router-dom";
import { CustomerLayout } from "@/layouts/CustomerLayout";
import PageNotFound from "@/shared/components/PageNotFound";
import HomePage from "@/features/home/pages/HomePage";

export const router = createBrowserRouter([
  {
    element: <CustomerLayout />,
    errorElement: <PageNotFound />,
    children: [{ path: "/", element: <HomePage /> }],
  },
]);
