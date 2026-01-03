import { useCartDrawer } from "@/hooks/useCardDrawer";
import { Button, Col, Drawer, Flex, Row, theme, Typography } from "antd";
import { cartDrawerData } from "../data/cartDrawerData";
import CartDrawerItemCard from "./CartDrawerItemCard";
import type { PopularProductType } from "@/features/products/types/PopularProductType";
import { useNavigate } from "react-router-dom";

const CartDrawer = () => {
  const { token } = theme.useToken();
  const { open, closeDrawer } = useCartDrawer();
  const navigation = useNavigate();

  return (
    <Drawer
      title="Shopping Card (2)"
      closable={{ "aria-label": "Close Button" }}
      onClose={() => closeDrawer()}
      open={open}
      style={{ height: "100vh" }}
      size={500}
    >
      <Flex
        style={{ height: "100%", width: "100%" }}
        vertical
        justify="space-between"
      >
        {/* Items */}
        <Row gutter={[10, 10]}>
          {cartDrawerData.map((item: PopularProductType) => (
            <Col span={24} key={item.id}>
              <CartDrawerItemCard proms={item} />
            </Col>
          ))}
        </Row>
        {/* Bottom */}
        <Flex style={{ width: "100%" }} vertical gap={10}>
          <Flex align="center" justify="space-between">
            <Typography.Text>2 Products</Typography.Text>
            <Typography.Title level={5}>$40.99</Typography.Title>
          </Flex>
          <Button
            style={{
              backgroundColor: token.colorPrimary,
              color: "#fff",
              borderRadius: "50px",
              width: "100%",
            }}
          >
            Checkout
          </Button>
          <Button
            style={{
              backgroundColor: "#ECFDF5",
              color: token.colorSuccess,
              borderRadius: "50px",
              width: "100%",
            }}
            onClick={() => {
              navigation("/my-shopping-cart");
              closeDrawer();
            }}
          >
            Go To Cart
          </Button>
        </Flex>
      </Flex>
    </Drawer>
  );
};

export default CartDrawer;
