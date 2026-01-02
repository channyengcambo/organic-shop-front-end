import { Col, Flex, Pagination, Row, Typography } from "antd";
import styles from "./Content.module.css";
import { ContentProducts } from "../../data/ProductContent";
import ProductCard from "@/shared/components/product-card/ProductCard";
import type { PopularProductType } from "@/features/products/types/PopularProductType";

const Content = () => {
  return (
    <Flex vertical gap={30}>
      <Flex align="center" justify="space-between">
        <div>
          <Typography.Text>Sort By: </Typography.Text>
          <select className={styles.sortBy}>
            <option value="Latest">Latest</option>
            <option value="NewArrived">New Arrived</option>
            <option value="TopRate">Top Rate</option>
          </select>
        </div>
        <Flex align="center" gap={5}>
          <Typography.Title level={5} style={{ margin: 0 }}>
            52
          </Typography.Title>
          <Typography.Text>Results Found</Typography.Text>
        </Flex>
      </Flex>
      <Row gutter={[10, 10]}>
        {ContentProducts.map((item: PopularProductType) => (
          <Col span={6} key={item.id}>
            <ProductCard product={item} hasBorderRadius cardHeight="350px" />
          </Col>
        ))}
      </Row>

      <div style={{ marginTop: "30px", width: "100%" }}>
        <Pagination
          defaultCurrent={1}
          total={500}
          align="center"
          styles={{ item: { borderRadius: 999 } }}
          showSizeChanger={false}
        />
      </div>
    </Flex>
  );
};

export default Content;
