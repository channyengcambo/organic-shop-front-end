import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import AppBar from "@/shared/components/AppBar";
import Footer from "@/shared/components/Footer";

const { Header, Content } = Layout;

export function CustomerLayout() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ padding: 0 }}>
        <AppBar />
      </Header>

      <Content style={{ padding: "24px" }}>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
}
