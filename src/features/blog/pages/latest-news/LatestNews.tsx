import SectionHeader from "@/shared/components/section-header/SectionHeader";
import { Col, Row } from "antd";
import LatestnewsCard from "../altest-news-card/LatestnewsCard";
import { LatestNewsData } from "../../data/LatestNewsData";
import type { LatestNewType } from "../../types/LatestNewsType";

const LatestNews = () => {
  return (
    <div>
      <SectionHeader
        title="Latest News"
        isShowViewMore={false}
        isTtileCenter={true}
      />
      <Row gutter={[24, 24]}>
        {LatestNewsData.map((item: LatestNewType) => (
          <Col xs={24} md={8} key={item.id}>
            <LatestnewsCard proms={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default LatestNews;
