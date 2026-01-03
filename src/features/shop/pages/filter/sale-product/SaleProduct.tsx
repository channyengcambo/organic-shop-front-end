import type { PopularProductType } from "@/features/products/types/PopularProductType";
import { SaleProdcutData } from "@/features/shop/data/SaleProductData";
import { Col, Row, Typography } from "antd";
import SaleProductCard from "./SaleProductCard";

const SaleProduct = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Typography.Title level={5}>Sale Products</Typography.Title>
      <Row gutter={[16, 16]}>
        {SaleProdcutData.map((item: PopularProductType) => (
          <Col span={24} key={item.id}>
            <SaleProductCard proms={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SaleProduct;
