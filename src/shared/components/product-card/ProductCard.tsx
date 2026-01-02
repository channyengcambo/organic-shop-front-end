import { Button, Card, Image, Rate, Typography } from "antd";
import styles from "./PopularProduct.module.css";
import type { PopularProductType } from "@/features/products/types/PopularProductType";
import CustomTag from "../tag/CustomTag";
import {
  EyeOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import CountdownTimer from "../countdown-timer/CountdownTimer";
import { useProductActions } from "@/hooks/useProductActions";

interface ProductCardProps {
  product: PopularProductType;
  hasBorderRadius?: boolean;
  cardHeight?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  hasBorderRadius,
  cardHeight,
  product,
}) => {
  const { viewProductDetail } = useProductActions();

  const {
    id,
    coverImage,
    allImage,
    title,
    price,
    totalPrice,
    discountRate,
    discountLabel,
    discountLabelBg,
    userRating,
    totalUserFeedBack,
    shortDiscription,
    discription,
    label,
    labelBg,
    isHotDeal,
    hotDealEndIn,
    slug,
    status,
    categoryName,
    tags,
    quantity,
    brandName,
  } = product;

  return (
    <Card
      className={styles.productCard}
      hoverable
      style={{
        borderRadius: hasBorderRadius ? "8px" : 0,
        height: cardHeight || "100%",
      }}
      onClick={() => viewProductDetail(id)}
    >
      <div className={styles.CardHeader}>
        {/* Head */}
        <div className={styles.CardHead}>
          {/* Tag */}
          <div className={styles.CardHeadLabel}>
            {discountLabel && (
              <CustomTag
                title={discountLabel || ""}
                bgColor={discountLabelBg}
              />
            )}
            {label && <CustomTag title={label} bgColor={labelBg} />}
          </div>
          {/* Action */}
          {!isHotDeal && (
            <div className={styles.cardHeadAction}>
              <Button
                shape="circle"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <HeartOutlined style={{ fontSize: "20px" }} />
              </Button>
              <Button
                shape="circle"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <EyeOutlined style={{ fontSize: "20px" }} />
              </Button>
            </div>
          )}
        </div>
        {/* Image */}
        <div
          className={`${!isHotDeal ? styles.imageWrapper : styles.imageHotDeal}`}
        >
          <Image
            alt={title}
            src={coverImage}
            preview={false}
            className={styles.productImage}
          />
        </div>
      </div>
      {/* Body */}
      {!isHotDeal ? (
        <div className={styles.cardBody}>
          <div style={{ width: "100%" }}>
            <Typography.Title
              className={styles.title}
              level={5}
              style={{ fontWeight: "normal" }}
              ellipsis={{ rows: 1 }}
            >
              {title}
            </Typography.Title>

            <div className={styles.price}>
              <Typography.Title level={5} style={{ margin: 0 }}>
                ${totalPrice.toFixed(2)}
              </Typography.Title>
              {discountRate > 0 && (
                <Typography.Title level={5} className={styles.defaultPrice}>
                  ${price.toFixed(2)}
                </Typography.Title>
              )}
            </div>
            <Rate disabled allowHalf value={userRating} size="small" />
          </div>
          <Button
            shape="circle"
            className={styles.addToCartButton}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <ShoppingCartOutlined className={styles.cartIcon} />
          </Button>
        </div>
      ) : (
        <div>
          {/* Action */}
          <div className={styles.hotDealAction}>
            <Button shape="circle">
              <HeartOutlined style={{ fontSize: "20px" }} />
            </Button>
            <Button className={styles.addToCart}>
              <Typography.Title level={5} style={{ margin: 0, color: "#fff" }}>
                Add To Cart
              </Typography.Title>
              <ShoppingCartOutlined
                style={{ color: "#fff", fontSize: "20px" }}
              />
            </Button>
            <Button shape="circle">
              <EyeOutlined style={{ fontSize: "20px" }} />
            </Button>
          </div>

          {/* Content */}
          <div className={styles.hotDealContent}>
            <Typography.Title
              className={styles.title}
              level={5}
              style={{ fontWeight: "normal" }}
            >
              {title}
            </Typography.Title>
            <div className={styles.price}>
              <Typography.Title level={4} style={{ margin: 0 }}>
                ${totalPrice.toFixed(2)}
              </Typography.Title>
              {discountRate > 0 && (
                <Typography.Title level={4} className={styles.defaultPrice}>
                  ${price.toFixed(2)}
                </Typography.Title>
              )}
            </div>

            <div>
              <Rate disabled allowHalf value={userRating} size="small" /> (
              <Typography.Text className="greyText1">
                {totalUserFeedBack} Feedback
              </Typography.Text>
              )
            </div>

            <div className={styles.timerEnd}>
              <Typography.Text className="greyText1">
                Hurry up! Offer ends In:
              </Typography.Text>
              <CountdownTimer
                targetDate={new Date("2025-12-31T23:59:59")}
                timeColor="#000"
                timeMarkColor="#71717b"
              />
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default ProductCard;
