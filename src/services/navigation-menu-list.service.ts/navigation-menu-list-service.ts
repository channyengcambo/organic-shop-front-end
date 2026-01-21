import http from "@/services/http";
import { API_ROUTE } from "@/services/api_route";

export const NavigationMenuService = {
  getAll() {
    return http.get(API_ROUTE.navigationMenu.list);
  },

  getById(id: number) {
    return http.get(API_ROUTE.navigationMenu.detail(id));
  },
};
