import { Card, Col, Row } from "antd";
import GridItem from "./GridItem";
import { CustomerFeatureData } from "../../data/CustomerFeatureData";

const CustomerFeature = () => {
  return (
    <Card style={{ padding: "10px 20px" }}>
      <Row gutter={16}>
        {CustomerFeatureData.map((item) => (
          <Col span={6} key={item.id}>
            <GridItem
              id={item.id}
              icon={item.icon}
              subTitle={item.subTitle}
              title={item.title}
            />
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default CustomerFeature;
