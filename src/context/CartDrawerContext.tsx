import { createContext, useState } from "react";

export type CartDrawerContextType = {
  open: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
};

export const CartDrawerContext = createContext<CartDrawerContextType | null>(
  null
);

export const CartDrawerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <CartDrawerContext.Provider value={{ open, openDrawer, closeDrawer }}>
      {children}
    </CartDrawerContext.Provider>
  );
};
