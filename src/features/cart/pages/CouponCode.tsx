import { Button, Card, Flex, Input, Space, Typography } from "antd";

const CouponCode = () => {
  return (
    <Card style={{ marginTop: "30px", borderRadius: "4px" }}>
      <div>
        <Flex align="center" gap={20}>
          <Typography.Text strong style={{ whiteSpace: "nowrap" }}>
            Coupon Code
          </Typography.Text>
          <Space.Compact style={{ width: "100%" }}>
            <Input
              placeholder="Enter coupon code"
              style={{
                borderRadius: "50px 0 0 50px",
                height: 48,
              }}
            />

            <Button
              type="primary"
              style={{
                borderRadius: "0 50px 50px 0",
                height: 48,
                paddingInline: 32,
              }}
            >
              Apply Coupon
            </Button>
          </Space.Compact>
        </Flex>
      </div>
    </Card>
  );
};

export default CouponCode;
