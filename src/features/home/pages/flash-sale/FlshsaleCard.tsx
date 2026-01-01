import { Button, Card, Typography } from "antd";
import styles from "./FlashSaleCard.module.css";
import type { FlashSaleType } from "../../types/FlashSaleType";
import CountdownTimer from "@/shared/components/countdown-timer/CountdownTimer";
import { ArrowRightOutlined } from "@ant-design/icons";
import CustomTag from "@/shared/components/tag/CustomTag";

interface FlshsaleCardProps {
  titleSize?: 1 | 2 | 3 | 4 | 5;
  cardHeight?: string;
  proms: FlashSaleType;
}
const FlshsaleCard: React.FC<FlshsaleCardProps> = ({
  titleSize = 1,
  cardHeight = "536px",
  proms,
}) => {
  const {
    image,
    title,
    topLabel,
    endIn,
    flashData,
    flashLabel,
    isFlashDataAsTag,
    isWhiteTextColor,
    flashDataTagBg,
    flashDataTagColor,
  } = proms;

  return (
    <Card
      className={styles.flashCard}
      style={{
        height: cardHeight,
      }}
    >
      <div className={styles.bg} style={{ backgroundImage: `url(${image})` }}>
        <div
          className={`${styles.overlayContent} ${isWhiteTextColor ? styles.whiteColor : ""}`}
        >
          <Typography.Title level={5}>{topLabel}</Typography.Title>
          <Typography.Title level={titleSize} className={styles.contentTitle}>
            {title}
          </Typography.Title>
          {endIn && (
            <CountdownTimer targetDate={new Date("2025-12-31T23:59:59")} />
          )}
          {!endIn && flashLabel && (
            <div className={styles.contentLabel}>
              <Typography.Title level={5} style={{ margin: 0 }}>
                {flashLabel}
              </Typography.Title>
              {isFlashDataAsTag ? (
                <CustomTag
                  title={flashData || ""}
                  bgColor={flashDataTagBg}
                  padding="5px 10px"
                />
              ) : (
                <Typography.Title
                  level={4}
                  style={{
                    color: flashDataTagColor,
                    margin: 0,
                  }}
                >
                  {flashData}
                </Typography.Title>
              )}
            </div>
          )}
          <Button>
            Shop Now <ArrowRightOutlined />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default FlshsaleCard;
