import { ConfigProvider } from "antd";
import { antTheme } from "@/theme/antTheme";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ConfigProvider theme={antTheme}>{children}</ConfigProvider>;
}
