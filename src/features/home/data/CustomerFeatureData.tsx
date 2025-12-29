import {
  CustomerServiceOutlined,
  InboxOutlined,
  SafetyCertificateOutlined,
  TruckOutlined,
} from "@ant-design/icons";
import type { CustomerFeatureType } from "../types/CustomerFeatureType";

export const CustomerFeatureData: CustomerFeatureType[] = [
  {
    id: "1",
    title: "Free Shipping",
    subTitle: "Free shipping on all your order",
    icon: TruckOutlined,
  },
  {
    id: "2",
    title: "Customer Support 24/7",
    subTitle: "Instant access to Support",
    icon: CustomerServiceOutlined,
  },
  {
    id: "3",
    title: "100% Secure Payment",
    subTitle: "We ensure your money is save",
    icon: SafetyCertificateOutlined,
  },
  {
    id: "4",
    title: "Money-Back Guarantee",
    subTitle: "30 Days Money-Back Guarantee",
    icon: InboxOutlined,
  },
];
