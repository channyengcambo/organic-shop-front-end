import type { FooterListItemType } from "../types/FooterListItemType";

export const FirstList: FooterListItemType = {
  title: "My Account",
  items: [
    { title: "My Account", link: "" },
    { title: "Order History", link: "" },
    { title: "Shopping Cart", link: "" },
    { title: "Wishlist", link: "" },
  ],
};

export const SecondList: FooterListItemType = {
  title: "Helps",
  items: [
    { title: "Contacts", link: "" },
    { title: "Faqs", link: "" },
    {
      title: "Terms & Condition",
      link: "",
    },
    {
      title: "Privacy Policy",
      link: "",
    },
  ],
};

export const ThirthList: FooterListItemType = {
  title: "Proxy",
  items: [
    { title: "About", link: "" },
    { title: "Shop", link: "" },
    { title: "Product", link: "" },
    { title: "Track Order", link: "" },
  ],
};

export const FourthList: FooterListItemType = {
  title: "Categories",
  items: [
    { title: "Fruit & Vetables", link: "" },
    { title: "Meat & Fishe", link: "" },
    { title: "Bread & Bakery", link: "" },
    { title: "Beauty & Health", link: "" },
  ],
};

export const PaymentItem: string[] = [
  "/assets/images/payment-methods/ApplePay.png",
  "/assets/images/payment-methods/Visa.png",
  "/assets/images/payment-methods/Mastercard.png",
  "/assets/images/payment-methods/Discover.png",
  "/assets/images/payment-methods/Cart.png",
];
