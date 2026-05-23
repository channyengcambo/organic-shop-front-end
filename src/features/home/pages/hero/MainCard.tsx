import { Button, Card, Flex, Tag, theme, Typography } from "antd";
import { IoArrowForward } from "react-icons/io5";
import styles from "./HeroComponent.module.css";

const { Title } = Typography;
const MainCard = () => {
  const { token } = theme.useToken();
  return (
    <Card className={styles.mainCard}>
      <div className={styles.mainContent}>
        <Title className={styles.mainTitle}>
          Fresh & Healthy Organic Food
        </Title>
        <div className={styles.mainCopy}>
          <Flex align="center" gap={15} className={styles.saleRow}>
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
        <Button className={styles.shopButton}>
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
