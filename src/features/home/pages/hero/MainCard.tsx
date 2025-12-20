import { Button, Card, Flex, Tag, theme, Typography } from "antd";
import { IoArrowForward } from "react-icons/io5";
const { Title } = Typography;
const MainCard = () => {
  const { token } = theme.useToken();
  return (
    <Card
      style={{
        backgroundImage: 'url("/assets/images/hero/BigBanner.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "right",
        height: "100%",
        borderRadius: "12px",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "70%" }}>
        <Title style={{ color: "#fff", fontWeight: "bold" }}>
          Fresh & Healthy Organic Food
        </Title>
        <div
          style={{
            borderLeft: `2px solid ${token.colorSuccess}`,
            paddingLeft: "15px",
            color: "#fff",
          }}
        >
          <Flex align="center" gap={15}>
            <Typography.Title style={{ color: "#fff" }} level={4}>
              Sale up to
            </Typography.Title>
            <Tag
              style={{
                padding: "5px 5px",
                background: `${token.colorWarning}`,
              }}
            >
              <Typography.Text style={{ color: "#fff", fontWeight: "bold" }}>
                30% OFF
              </Typography.Text>
            </Tag>
          </Flex>
          <Typography style={{ color: "white", marginTop: "10px" }}>
            Free shipping on all your order.
          </Typography>
        </div>
        <Button style={{ marginTop: "20px" }}>
          <Typography style={{ color: `${token.colorPrimary}` }}>
            Shop now
          </Typography>
          <IoArrowForward />
        </Button>
      </div>
    </Card>
  );
};

export default MainCard;
