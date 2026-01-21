const FRONT_END_PATH = "/front-end-path";

export const API_ROUTE = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    logout: "/auth/logout",
    refreshToken: "/auth/refresh",
    profile: "/auth/profile",
  },

  navigationMenu: {
    list: `${FRONT_END_PATH}/navigation-menu-items`,
    detail: (id: number | string) => `/navigation-menu-items/${id}`,
    create: "/navigation-menu-items",
    update: (id: number | string) => `/navigation-menu-items/${id}`,
    delete: (id: number | string) => `/navigation-menu-items/${id}`,
  },

  product: {
    list: "/products",
    detailBySlug: (slug: string) => `/products/${slug}`,
    byCategory: (categorySlug: string) => `/products/category/${categorySlug}`,
    hotDeals: "/products/hot-deals",
  },

  category: {
    list: "/categories",
    detail: (id: number | string) => `/categories/${id}`,
  },

  brand: {
    list: "/brands",
  },
} as const;
