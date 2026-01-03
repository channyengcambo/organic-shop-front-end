import { Card, Col, Flex, Image, Row } from "antd";
import styles from "./AllProductDetailinfoImage.module.css";
import GridItem from "@/features/home/pages/customer-feature/GridItem";
import type { CustomerFeatureType } from "@/features/home/types/CustomerFeatureType";
import { CiDiscount1 } from "react-icons/ci";
import { LuLeaf } from "react-icons/lu";

const productDetailInofeContent: CustomerFeatureType[] = [
  {
    id: "1",
    title: "64% Discount",
    subTitle: "Save your 64% money with us",
    icon: CiDiscount1,
  },

  {
    id: "2",
    title: "100% Organic",
    subTitle: "100% Organic Vegetables",
    icon: LuLeaf,
  },
];

const AllProductDetailinfoImage = () => {
  return (
    <div className={styles.container}>
      <Flex vertical gap={20} style={{ width: "100%" }}>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/images/product-detail-video.png"
            preview={false}
            className={styles.image}
          />
        </div>
        <Card className={styles.detailContent}>
          <Row>
            {productDetailInofeContent.map((item: CustomerFeatureType) => (
              <Col span={12} key={item.id}>
                <GridItem proms={item} />
              </Col>
            ))}
          </Row>
        </Card>
      </Flex>
    </div>
  );
};

export default AllProductDetailinfoImage;
