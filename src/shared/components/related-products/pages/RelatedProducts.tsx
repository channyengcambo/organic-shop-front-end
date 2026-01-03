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
      <Row gutter={[10, 10]}>
        {relatedproductData.map((item: PopularProductType) => (
          <Col span={6} key={item.id}>
            <ProductCard product={item} cardHeight="350px" hasBorderRadius />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RelatedProducts;
