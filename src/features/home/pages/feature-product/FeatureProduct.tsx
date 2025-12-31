import SectionHeader from "@/shared/components/section-header/SectionHeader";
import { Col, Row } from "antd";
import { FeatureProducts } from "../../data/FeatureProductData";
import ProductCard from "@/shared/components/product-card/ProductCard";

const FeatureProduct = () => {
  return (
    <div>
      <SectionHeader title="Feature Prodcuts" />
      <Row>
        {FeatureProducts.map((item) => (
          <Col key={item.id} flex="20%">
            <ProductCard product={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeatureProduct;
