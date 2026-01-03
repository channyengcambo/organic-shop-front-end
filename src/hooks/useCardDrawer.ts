import { CartDrawerContext } from "@/context/CartDrawerContext";
import { useContext } from "react";

export const useCartDrawer = () => {
  const context = useContext(CartDrawerContext);

  if (!context) {
    throw new Error("useCartDrawer must be used within CartDrawerProvider");
  }

  return context;
};
