import { Col, Row } from "antd";
import FlshsaleCard from "./FlshsaleCard";
import { FlashSaleData } from "../../data/FalshSaleData";

const FlashSale = () => {
  return (
    <Row gutter={[18, 18]} style={{ margin: "30px 0 0 0" }}>
      {FlashSaleData.map((item) => (
        <Col xs={24} md={8} key={item.id}>
          <FlshsaleCard proms={item} />
        </Col>
      ))}
    </Row>
  );
};

export default FlashSale;
