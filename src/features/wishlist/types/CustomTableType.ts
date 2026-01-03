export type CustomColumnType<T> = {
  key: keyof T | "action" | "product";
  title: string;
  type?:
    | "text"
    | "product"
    | "price"
    | "rating"
    | "action"
    | "stock-status"
    | "quantity"
    | "sub-total-price";
};
