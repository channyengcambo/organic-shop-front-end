import { Col, Row } from "antd";
import ProductImages from "./product-images/ProductImages";
import ProductDetails from "./product-details/ProductDetails";
import { prodcutDetailData } from "../data/prodcutDetailData";
import AllProductDetailInfor from "./all-product-detail-info/AllProductDetailInfor";
import RelatedProducts from "../../related-products/pages/RelatedProducts";

const ProductDetail = () => {
  return (
    <div>
      {/* Image and prof product info */}
      <div style={{ marginTop: 30, minHeight: "50vh" }}>
        <Row gutter={16} align="stretch">
          <Col span={12} style={{ maxHeight: "50vh" }}>
            <ProductImages
              coverImage={prodcutDetailData.coverImage}
              allImages={prodcutDetailData.allImage}
            />
          </Col>

          <Col span={12}>
            <ProductDetails
              title={prodcutDetailData.title}
              shortDescription={prodcutDetailData.shortDiscription}
              productCategory={prodcutDetailData.categoryName}
            />
          </Col>
        </Row>
      </div>

      {/* All product detail info */}
      <AllProductDetailInfor />

      {/* Related Products */}
      <RelatedProducts />
    </div>
  );
};

export default ProductDetail;
