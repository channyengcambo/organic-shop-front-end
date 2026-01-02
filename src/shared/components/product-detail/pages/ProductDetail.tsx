import { Col, Row } from "antd";
import ProductImages from "./product-images/ProductImages";
import ProductDetails from "./product-details/ProductDetails";
import { prodcutDetailData } from "../data/prodcutDetailData";

const ProductDetail = () => {
  return (
    <div>
      <div style={{ marginTop: 30, height: "50vh" }}>
        <Row gutter={16} style={{ height: "100%" }}>
          <Col span={12} style={{ height: "100%" }}>
            <ProductImages
              coverImage={prodcutDetailData.coverImage}
              allImages={prodcutDetailData.allImage}
            />
          </Col>

          <Col span={12} style={{ height: "100%" }}>
            <ProductDetails />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductDetail;
