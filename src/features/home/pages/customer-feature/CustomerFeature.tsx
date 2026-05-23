import { Card, Col, Row } from "antd";
import GridItem from "./GridItem";
import { CustomerFeatureData } from "../../data/CustomerFeatureData";
import type { CustomerFeatureType } from "../../types/CustomerFeatureType";
import styles from "./CustomerFeature.module.css";

const CustomerFeature = () => {
  return (
    <Card className={styles.card}>
      <Row gutter={[18, 18]}>
        {CustomerFeatureData.map((item: CustomerFeatureType) => (
          <Col xs={24} sm={12} lg={6} key={item.id}>
            <GridItem proms={item} />
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default CustomerFeature;
