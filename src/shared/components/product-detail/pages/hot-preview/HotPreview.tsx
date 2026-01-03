import { Col, Row } from "antd";
import React from "react";
import ProductImages from "../product-images/ProductImages";
import ProductDetails from "../product-details/ProductDetails";

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
    <div style={{ marginTop: 30, minHeight: "50vh" }}>
      <Row gutter={16} align="stretch">
        <Col span={12} style={{ maxHeight: "50vh" }}>
          <ProductImages coverImage={coverImage} allImages={allImages} />
        </Col>

        <Col span={12}>
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
