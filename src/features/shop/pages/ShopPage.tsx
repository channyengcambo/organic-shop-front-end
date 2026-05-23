import { Col, Row } from "antd";
import Filter from "./filter/Filter";
import Content from "./content/Content";
import styles from "./ShopPage.module.css";

const ShopPage = () => {
  return (
    <div className={styles.shopPage}>
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={6}>
          <div className={styles.filterPanel}>
            <Filter />
          </div>
        </Col>
        <Col xs={24} lg={18}>
          <Content />
        </Col>
      </Row>
    </div>
  );
};

export default ShopPage;
