export type StaticNavItem = {
  id: number;
  label: string;
  fullPath: string;
  children?: StaticNavItem[];
};

export const navItems: StaticNavItem[] = [
  { id: 1, label: "Home", fullPath: "/" },
  { id: 2, label: "Shop", fullPath: "/shop/all-products" },
  {
    id: 3,
    label: "Categories",
    fullPath: "/shop/all-products",
    children: [
      { id: 31, label: "Fresh Fruit", fullPath: "/shop/all-products" },
      { id: 32, label: "Vegetables", fullPath: "/shop/all-products" },
      { id: 33, label: "Organic Pantry", fullPath: "/shop/all-products" },
    ],
  },
  { id: 4, label: "Wishlist", fullPath: "/my-wishlist" },
  { id: 5, label: "Cart", fullPath: "/my-shopping-cart" },
];
