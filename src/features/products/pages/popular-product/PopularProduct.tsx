import ProductCard from "@/shared/components/product-card/ProductCard";
import SectionHeader from "@/shared/components/section-header/SectionHeader";
import { Col, Row } from "antd";
import { PopularProductData } from "../../data/PopularProductData";

const PopularProduct = () => {
  return (
    <div>
      <SectionHeader title="Popular Products" />
      <Row>
        {PopularProductData.map((item) => (
          <Col key={item.id} flex="20%">
            <ProductCard product={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PopularProduct;
