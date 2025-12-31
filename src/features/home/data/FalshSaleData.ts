import type { FlashSaleType } from "../types/FlashSaleType";

export const FlashSaleData: FlashSaleType[] = [
  {
    id: "0",
    topLabel: "Best Deals",
    title: "Sale of the Month",
    flashLabel: "",
    flashData: "",
    endIn: new Date(),
    image: "/assets/images/falsh-sales/1.jpg",
    isWhiteTextColor: true,
  },
  {
    id: "1",
    topLabel: "85% Fat Free",
    title: "Low-Fat Meat",
    flashLabel: "Started at",
    flashData: "$79.99",
    endIn: null,
    image: "/assets/images/falsh-sales/2.jpg",
    isFlashDataAsTag: false,
    isWhiteTextColor: true,
    flashDataTagColor: "#D0872E",
  },
  {
    id: "2",
    topLabel: "Summer Sale",
    title: "100% Fresh Fruit",
    flashLabel: "Up to",
    flashData: "64% OFF",
    endIn: null,
    image: "/assets/images/falsh-sales/3.jpg",
    isFlashDataAsTag: true,
    flashDataTagBg: "#000",
    flashDataTagColor: "#FFB93B",
  },
];
