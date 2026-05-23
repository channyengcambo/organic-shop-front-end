import CustomTag from "@/shared/components/tag/CustomTag";
import { Button, Divider, Flex, Image, Rate, theme, Typography } from "antd";
import styles from "./ProductDetail.module.css";
import SocailMedi from "@/shared/components/socail-medi/SocailMedi";
import {
  HeartOutlined,
  MinusOutlined,
  PlusOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

type ProductDetailproms = {
  title?: string;
  quantity?: number | null;
  totalPrice?: number;
  price?: number;
  discountRate?: number;
  shortDescription?: string;
  productCategory?: string;
  userPreview?: number;
  previewStar?: number;
};

const ProductDetails = ({
  title,
  quantity,
  totalPrice,
  price,
  discountRate,
  shortDescription,
  productCategory,
  userPreview,
  previewStar = 0,
}: ProductDetailproms) => {
  const { token } = theme.useToken();

  return (
    <Flex vertical gap={20}>
      {/* Title */}
      <Flex align="center" gap={15} wrap>
        <Typography.Title level={1} className={styles.maringZero}>
          {title}
        </Typography.Title>
        <CustomTag
          title={quantity ? "In Stock" : "Out of Stock"}
          bgColor={quantity ? "#D0FAE5" : "#FFE2E2"}
          textColor={quantity ? token.colorSuccess : token.colorError}
        />
      </Flex>

      {/* Rating */}
      <Flex align="center" gap={24} wrap>
        <Flex align="center" gap={8}>
          <Rate value={previewStar} size="small" disabled />
          {userPreview && (
            <Typography.Text className={`${styles.maringZero} greyText1`}>
              {userPreview} Reviews
            </Typography.Text>
          )}
        </Flex>
        <Flex align="center">
          <Typography.Title level={5} className={styles.maringZero}>
            SKU:
          </Typography.Title>
          <Typography.Text className={`${styles.maringZero} greyText1}`}>
            2,51,594
          </Typography.Text>
        </Flex>
      </Flex>

      {/* Price */}
      <Flex align="center" gap={20} wrap>
        <Flex align="center" gap={15}>
          {discountRate && (
            <Typography.Title
              className={`${styles.maringZero} ${styles.fontWeihtNormal} greyText1 ${styles.lineThrow}`}
              level={3}
            >
              ${totalPrice?.toFixed(2)}
            </Typography.Title>
          )}
          <Typography.Title
            className={`${styles.maringZero} ${styles.fontWeihtNormal}`}
            style={{ color: token.colorSuccess }}
            level={3}
          >
            ${price?.toFixed(2)}
          </Typography.Title>
        </Flex>

        {discountRate && (
          <CustomTag
            title={`${discountRate.toFixed(2)}% OFF`}
            isCircle
            bgColor="#FFE2E2"
            textColor={token.colorError}
          />
        )}
      </Flex>

      <Divider />

      {/* Brand */}
      <Flex align="center" justify="space-between" gap={16} wrap>
        <Flex align="center" gap={5}>
          <Typography.Text style={{ fontWeight: "bold" }} className="greyText1">
            Brand:{" "}
          </Typography.Text>
          <Image src="/assets/images/brand.png" />
        </Flex>
        <Flex align="center" gap={5}>
          <Typography.Text style={{ fontWeight: "bold" }} className="greyText1">
            Shared item:{" "}
          </Typography.Text>
          <SocailMedi />
        </Flex>
      </Flex>

      {/* Short Description */}
      <Typography.Text className="greyText1">
        {shortDescription}
      </Typography.Text>

      <Divider />

      {/* Add to card */}
      <Flex align="center" gap={14} wrap>
        <Flex align="center" gap={20} className={styles.incressDecressButton}>
          <Button shape="circle">
            <MinusOutlined />
          </Button>
          <Typography.Title level={4} style={{ margin: 0 }}>
            1
          </Typography.Title>
          <Button shape="circle">
            <PlusOutlined />
          </Button>
        </Flex>
        <Button
          style={{
            width: "100%",
            borderRadius: "50px",
            backgroundColor: token.colorPrimary,
            color: "#fff",
          }}
        >
          Add to Cart <ShoppingCartOutlined style={{ fontSize: "20px" }} />
        </Button>
        <Button shape="circle" style={{ backgroundColor: "#D0FAE5" }}>
          <HeartOutlined style={{ fontSize: "20px", color: "#178236" }} />
        </Button>
      </Flex>

      <Divider />

      {/* Category */}
      <Flex vertical gap={5}>
        <Flex align="center" gap={5} wrap>
          <Typography.Title level={5} className={`${styles.maringZero}`}>
            Category:{" "}
          </Typography.Title>
          <Typography.Text className="greyText1">
            {productCategory}
          </Typography.Text>
        </Flex>
        <Flex align="center" gap={5} wrap>
          <Typography.Title level={5} className={`${styles.maringZero}`}>
            Tag:{" "}
          </Typography.Title>
          <Typography.Text className="greyText1">
            Vegetables Healthy <Link to="#">Chiness</Link> Cabbage Green Cabbage
          </Typography.Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductDetails;
