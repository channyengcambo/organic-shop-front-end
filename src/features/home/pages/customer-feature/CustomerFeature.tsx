import { Card, Col, Row } from "antd";
import GridItem from "./GridItem";
import { CustomerFeatureData } from "../../data/CustomerFeatureData";
import type { CustomerFeatureType } from "../../types/CustomerFeatureType";

const CustomerFeature = () => {
  return (
    <Card style={{ padding: "10px 20px" }}>
      <Row gutter={16}>
        {CustomerFeatureData.map((item: CustomerFeatureType) => (
          <Col span={6} key={item.id}>
            <GridItem proms={item} />
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default CustomerFeature;
