import type { ComponentType } from "react";

export interface CustomerFeatureType {
  id: string;
  title: string;
  subTitle: string;
  icon: ComponentType<{ style?: React.CSSProperties }>;
}
