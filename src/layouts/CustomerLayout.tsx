import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import AppBar from "@/shared/components/appBar/AppBar";
import FooterComponent from "@/shared/components/footer/compoments/FooterComponent";
import SubscribeSection from "@/shared/components/footer/compoments/SubscribeSection";
import NavItems from "@/shared/components/navItems/NavItems";
import ScrollToTop from "@/shared/components/scroll-to-top/ScrollToTop";
import GlobalHotPreview from "@/shared/components/global-hot-preview/GlobalHotPreview";
import CartDrawer from "@/shared/components/cart-drawer/pages/CartDrawer";
import { CartDrawerProvider } from "@/context/CartDrawerContext";
import styles from "./CustomerLayout.module.css";

const { Header, Content, Footer } = Layout;

export function CustomerLayout() {
  return (
    <CartDrawerProvider>
      <Layout>
        <Header className={styles.header}>
          <AppBar />
        </Header>

        <NavItems />
        <Content className={styles.content}>
          <ScrollToTop />
          <Outlet />
          <GlobalHotPreview />
          <CartDrawer />
        </Content>

        <SubscribeSection />

        <Footer style={{ background: "#1A1A1A", padding: "40px 0" }}>
          <FooterComponent />
        </Footer>
      </Layout>
    </CartDrawerProvider>
  );
}
