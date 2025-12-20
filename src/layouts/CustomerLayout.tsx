import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import AppBar from "@/shared/components/appBar/AppBar";
import FooterComponent from "@/shared/components/footer/compoments/FooterComponent";
import SubscribeSection from "@/shared/components/footer/compoments/SubscribeSection";
import NavItems from "@/shared/components/navItems/NavItems";

const { Header, Content, Footer } = Layout;

export function CustomerLayout() {
  return (
    <Layout>
      <Header
        style={{
          background: "#fff",
          height: "95px",
          padding: 0,
        }}
      >
        <AppBar />
      </Header>
      <NavItems />

      <Content style={{ width: "80%", margin: "0 auto", minHeight: "100vh" }}>
        <Outlet />
      </Content>
      <SubscribeSection />
      <Footer style={{ background: "#1A1A1A", padding: "40px 0" }}>
        <FooterComponent />
      </Footer>
    </Layout>
  );
}
