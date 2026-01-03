import { ConfigProvider } from "antd";
import { antTheme } from "@/theme/antTheme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        ...antTheme,
        token: {
          ...antTheme?.token,
          fontFamily: "Inter, system-ui, sans-serif",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
