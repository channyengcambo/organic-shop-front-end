import SectionHeader from "@/shared/components/section-header/SectionHeader";
import { Col, Row } from "antd";
import PopularCategoryCard from "./PopularCategoryCard";
import { PopularCategoryData } from "../data/PopularCategoryData";

const PopularCategories = () => {
  return (
    <div>
      <SectionHeader title="Popular Categories" margin="30px 0 10px 0" />

      <Row gutter={[16, 16]}>
        {PopularCategoryData.map((item) => (
          <Col span={4} key={item.id}>
            <PopularCategoryCard
              id={item.id}
              image={item.image}
              title={item.title}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PopularCategories;
