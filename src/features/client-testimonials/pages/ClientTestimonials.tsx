import SectionHeader from "@/shared/components/section-header/SectionHeader";
import { Col, Row } from "antd";
import ClientTestimonialCard from "./client-testimonials-card/ClientTestimonialCard";
import { ClientTestimonialData } from "../data/ClientTestimonialData";
import type { ClientTestimonialType } from "../types/ClientTestimonialType";

const ClientTestimonials = () => {
  return (
    <div>
      <SectionHeader
        title="Client Testimonials"
        isShowViewMore={false}
        isShowNextIcon={true}
        isShowPreviousIcon={true}
      />

      <Row gutter={[24, 24]}>
        {ClientTestimonialData.map((item: ClientTestimonialType) => (
          <Col xs={24} md={8} key={item.id}>
            <ClientTestimonialCard proms={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ClientTestimonials;
