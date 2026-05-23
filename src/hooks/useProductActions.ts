import { useNavigate } from "react-router-dom";

export const useProductActions = () => {
  const navigate = useNavigate();

  const viewProductDetail = (productId: string | number) => {
    navigate(`/product-detail/${productId}`);
  };

  const addToCart = () => {
    // call zustand / context / API
  };

  const addToWishlist = () => {
    // call zustand / context / API
  };

  return {
    viewProductDetail,
    addToCart,
    addToWishlist,
  };
};
