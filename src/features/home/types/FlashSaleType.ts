export interface FlashSaleType {
  id: string;
  topLabel: string;
  title: string;
  endIn?: Date | null;
  flashLabel?: string;
  flashData?: string;
  isFlashDataAsTag?: boolean;
  flashDataTagBg?: string;
  flashDataTagColor?: string;
  image: string;
  isWhiteTextColor?: boolean;
}
