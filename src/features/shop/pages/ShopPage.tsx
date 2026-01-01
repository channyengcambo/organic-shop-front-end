import { Col, Row } from "antd";
import Filter from "./filter/Filter";
import Content from "./content/Content";

const ShopPage = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Row>
        <Col span={6}>
          <Filter />
        </Col>
        <Col span={18}>
          <Content />
        </Col>
      </Row>
      <div style={{ margin: "60px" }}></div>
    </div>
  );
};

export default ShopPage;
