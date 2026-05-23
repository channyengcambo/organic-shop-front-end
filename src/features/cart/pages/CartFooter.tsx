import { Button, Flex } from "antd";

const CartFooter = () => {
  return (
    <Flex
      style={{ width: "100%" }}
      align="center"
      justify="space-between"
      gap={12}
      wrap
    >
      <Button style={{ borderRadius: "50px" }}>Return to shop</Button>

      <Button style={{ borderRadius: "50px" }}>Update cart</Button>
    </Flex>
  );
};

export default CartFooter;
