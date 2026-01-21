export interface NavigationItemType {
  id: number;
  parent_id: any;
  label: string;
  route: string;
  icon: string;
  order_index: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  description: any;
  image: any;
  image_action: any;
  total_items: any;
  target: string;
  full_path: string;
  children_recursive: NavigationMenuItem[];
}

export type NavigationMenuItem = {
  id: number;
  parent_id: number;
  label: string;
  route: string;
  icon: string;
  order_index: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  description: any;
  image: any;
  image_action: any;
  total_items: string;
  target: string;
  full_path: string;
  children_recursive: any[];
};
