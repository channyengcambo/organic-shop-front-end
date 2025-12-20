export interface NavigationItemType {
  id: string;
  title: string;
  link?: string;
  items?: NavigationMenuItem[];
}

export type NavigationMenuItem = {
  title?: string;
  subTitle?: string;
  image?: string;
  link?: string;
};
