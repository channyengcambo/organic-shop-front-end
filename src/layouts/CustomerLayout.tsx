import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import AppBar from "@/shared/components/AppBar";
import Footer from "@/shared/components/Footer";

const { Header, Content } = Layout;

export function CustomerLayout() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          background: "#fff",
          height: "100px",
        }}
      >
        <AppBar />
      </Header>

      <Content style={{ width: "80%", margin: "0 auto" }}>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
}
