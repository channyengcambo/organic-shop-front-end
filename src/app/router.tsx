import { createBrowserRouter } from "react-router-dom";
import { CustomerLayout } from "@/layouts/CustomerLayout";
import PageNotFound from "@/shared/components/PageNotFound";

export const router = createBrowserRouter([
  {
    element: <CustomerLayout />,
    errorElement: <PageNotFound />,
    children: [],
  },
]);
