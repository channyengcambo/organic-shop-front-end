import { Col, Row } from "antd";
import SectionHeader from "../../section-header/SectionHeader";
import { relatedproductData } from "../data/relatedProductData";
import ProductCard from "../../product-card/ProductCard";
import type { PopularProductType } from "@/features/products/types/PopularProductType";

const RelatedProducts = () => {
  return (
    <div>
      <SectionHeader
        title="Reated Products"
        isShowViewMore={false}
        isTtileCenter
      />
      <Row gutter={[16, 16]}>
        {relatedproductData.map((item: PopularProductType) => (
          <Col xs={24} sm={12} lg={6} key={item.id}>
            <ProductCard product={item} hasBorderRadius />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RelatedProducts;
