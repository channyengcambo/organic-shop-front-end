import { createBrowserRouter } from "react-router-dom";
import { CustomerLayout } from "../layouts/CustomerLayout";
import PageNotFound from "../shared/components/PageNotFound";
import HomePage from "../features/home/pages/HomePage";
import ShopPage from "../features/shop/pages/ShopPage";
import ProductDetail from "../shared/components/product-detail/pages/ProductDetail";
import WishList from "../features/wishlist/pages/WishList";
import Cart from "../features/cart/pages/Cart";

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
        path: "/shop/all-products",
        element: <ShopPage />,
        handle: { breadcrumb: "All Products" },
      },
      {
        path: "/product-detail/:id",
        element: <ProductDetail />,
        handle: { breadcrumb: "Product Detail" },
      },
      {
        path: "/my-wishlist",
        element: <WishList />,
        handle: { breadcrumb: "Wishlist" },
      },
      {
        path: "/my-shopping-cart",
        element: <Cart />,
        handle: { breadcrumb: "Shopping Cart" },
      },
    ],
  },
]);
