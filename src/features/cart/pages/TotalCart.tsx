import { Button, Card, Divider, Flex, theme, Typography } from "antd";

const TotalCart = () => {
  const { token } = theme.useToken();
  return (
    <Card style={{ borderRadius: "8px", width: "100%" }} title="Cart Total">
      <Flex align="center" justify="space-between">
        <Typography.Text>Subtotal:</Typography.Text>
        <Typography.Text strong>$144.95</Typography.Text>
      </Flex>
      <Divider />
      <Flex align="center" justify="space-between">
        <Typography.Text>Shipping:</Typography.Text>
        <Typography.Text strong>Free</Typography.Text>
      </Flex>
      <Divider />
      <Flex align="center" justify="space-between">
        <Typography.Text>Total:</Typography.Text>
        <Typography.Text strong>$144.95</Typography.Text>
      </Flex>

      <Button
        style={{
          borderRadius: "50px",
          width: "100%",
          backgroundColor: token.colorPrimary,
          color: "#fff",
          marginTop: "25px",
        }}
      >
        Process to checkout
      </Button>
    </Card>
  );
};

export default TotalCart;
