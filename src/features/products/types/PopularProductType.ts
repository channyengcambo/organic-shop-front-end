export interface PopularProductType {
  id: string;
  coverImage: string;
  allImage: string[];
  title: string;
  price: number;
  totalPrice: number;
  discountRate: number;
  discountLabel?: string;
  discountLabelBg?: string;
  userRating: number;
  totalUserFeedBack?: number;
  shortDiscription?: string;
  discription?: string;
  label?: string;
  labelBg?: string;
  isHotDeal?: boolean;
  hotDealEndIn?: Date;
  slug?: string;
  status?: string;
  categoryName?: string;
  tags?: string[];
  quantity: number;
  brandName?: string;
}
