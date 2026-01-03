import type { PopularProductType } from "@/features/products/types/PopularProductType";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Card, Flex, Image, Typography } from "antd";

type CartDrawerItemCardProms = {
  proms: PopularProductType;
};

const CartDrawerItemCard: React.FC<CartDrawerItemCardProms> = ({ proms }) => {
  const { coverImage, title, totalPrice } = proms;
  return (
    <Card style={{ height: "120px" }}>
      <Flex
        align="center"
        justify="space-between"
        style={{ position: "relative" }}
      >
        <Flex gap={5}>
          <div style={{ height: "100px", width: "100px" }}>
            <Image
              src={coverImage}
              preview={false}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>
          <Flex vertical>
            <Typography.Title level={5}>{title}</Typography.Title>
            <Typography.Text>1kg * ${totalPrice.toFixed(2)}</Typography.Text>
          </Flex>
        </Flex>
        <div style={{ position: "absolute", right: 0 }}>
          <Button shape="circle">
            <CloseOutlined />
          </Button>
        </div>
      </Flex>
    </Card>
  );
};

export default CartDrawerItemCard;
