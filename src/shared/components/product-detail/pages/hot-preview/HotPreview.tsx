import { Col, Row } from "antd";
import React from "react";
import ProductImages from "../product-images/ProductImages";
import ProductDetails from "../product-details/ProductDetails";
import styles from "./HotPreview.module.css";

type HotPreviewProms = {
  coverImage?: string;
  allImages?: string[];
  title?: string;
  quantity?: number | null;
  totalPrice?: number;
  price?: number;
  discountRate?: number;
  shortDescription?: string;
  productCategory?: string;
  userPreview?: number;
  preViewStar?: number;
};

const HotPreview: React.FC<HotPreviewProms> = ({
  coverImage,
  allImages,
  title,
  quantity,
  totalPrice,
  price,
  discountRate,
  shortDescription,
  productCategory,
  userPreview,
  preViewStar,
}) => {
  return (
    <div className={styles.preview}>
      <Row gutter={[24, 24]} align="stretch">
        <Col xs={24} lg={12} className={styles.imageColumn}>
          <ProductImages coverImage={coverImage} allImages={allImages} />
        </Col>

        <Col xs={24} lg={12} className={styles.detailColumn}>
          <ProductDetails
            title={title}
            shortDescription={shortDescription}
            productCategory={productCategory}
            discountRate={discountRate}
            price={price}
            totalPrice={totalPrice}
            quantity={quantity}
            userPreview={userPreview}
            previewStar={preViewStar}
          />
        </Col>
      </Row>
    </div>
  );
};

export default HotPreview;
