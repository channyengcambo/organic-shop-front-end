import { Button, Card, Image, Typography } from "antd";
import styles from "./EventSale.module.css";
import { ArrowRightOutlined } from "@ant-design/icons";

const EventSale = () => {
  return (
    <Card className={styles.cardContainer}>
      <Image
        src="/assets/images/event-sale.jpg"
        preview={false}
        className={styles.image}
      />
      <div className={styles.overlayContent}>
        <div className={styles.contentItem}>
          <Typography.Title level={4} className={styles.contentLabel}>
            Summer Sale
          </Typography.Title>
          <Typography.Title className={styles.contentDiscount}>
            <span className={styles.contentDiscountFirst}>37%</span>
            <span className={styles.contentDiscountSecond}>OFF</span>
          </Typography.Title>
          <div className={styles.descriptionContainer}>
            <Typography.Text className={`greyText ${styles.description}`}>
              Free on all your order, Free Shipping and 30 days money-back
              guarantee
            </Typography.Text>

            <Button className={styles.actionButton}>
              Shop Now
              <ArrowRightOutlined />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EventSale;
