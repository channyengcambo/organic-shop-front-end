import type { ThemeConfig } from "antd";

export const antTheme: ThemeConfig = {
  token: {
    colorPrimary: "#00B207",
    colorSuccess: "#2C742F",
    colorWarning: "#FF8A00",
    colorError: "#EA4B48",

    borderRadius: 8,
    fontSize: 14,

    fontFamily: "Inter, system-ui, sans-serif",
  },

  components: {
    Button: {
      controlHeight: 44,
      borderRadius: 8,
    },
    Input: {
      controlHeight: 44,
    },
    Card: {
      borderRadiusLG: 12,
    },
  },
};
