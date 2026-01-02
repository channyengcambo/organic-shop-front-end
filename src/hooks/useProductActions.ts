import type { PopularProductType } from "@/features/products/types/PopularProductType";
import { useNavigate } from "react-router-dom";

export const useProductActions = () => {
  const navigate = useNavigate();

  const viewProductDetail = (productId: string | number) => {
    navigate(`/product-detail/${productId}`);
  };

  const addToCart = (product: PopularProductType) => {
    // call zustand / context / API
  };

  const addToWishlist = (product: PopularProductType) => {
    // call zustand / context / API
  };

  return {
    viewProductDetail,
    addToCart,
    addToWishlist,
  };
};
