import { Button, Card, Image, Rate, Typography } from "antd";
import styles from "./PopularProduct.module.css";
import type { PopularProductType } from "@/features/home/types/PopularProductType";
import CustomTag from "../tag/CustomTag";
import {
  EyeOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

interface ProductCardProps {
  product: PopularProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
    <Card className={styles.productCard} hoverable>
      {/* Head */}
      <div className={styles.CardHeader}>
        <div className={styles.CardHead}>
          <div className={styles.CardHeadLabel}>
            {discountLabel && (
              <CustomTag
                title={discountLabel || ""}
                bgColor={discountLabelBg}
              />
            )}
            {label && <CustomTag title={label} bgColor={labelBg} />}
          </div>
          <div className={styles.cardHeadAction}>
            <Button shape="circle">
              <HeartOutlined style={{ fontSize: "20px" }} />
            </Button>
            <Button shape="circle">
              <EyeOutlined style={{ fontSize: "20px" }} />
            </Button>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            alt={title}
            src={coverImage}
            preview={false}
            className={styles.productImage}
          />
        </div>
      </div>
      {/* Body */}
      <div className={styles.cardBody}>
        <div>
          <Typography.Title
            className={styles.title}
            level={5}
            style={{ fontWeight: "normal" }}
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
        <Button shape="circle" className={styles.addToCartButton}>
          <ShoppingCartOutlined className={styles.cartIcon} />
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
