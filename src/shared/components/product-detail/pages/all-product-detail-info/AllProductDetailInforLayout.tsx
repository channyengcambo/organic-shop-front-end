import { Col, Row } from "antd";
import React from "react";

type TwoColumnLayoutProps = {
  left: React.ReactNode;
  right: React.ReactNode;
  gutter?: number;
  leftSpan?: number;
  rightSpan?: number;
};

const AllProductDetailInforLayout = ({
  left,
  right,
  gutter = 24,
  leftSpan = 12,
  rightSpan = 12,
}: TwoColumnLayoutProps) => {
  return (
    <Row gutter={[gutter, gutter]}>
      <Col xs={24} lg={leftSpan}>{left}</Col>
      <Col xs={24} lg={rightSpan}>{right}</Col>
    </Row>
  );
};

export default AllProductDetailInforLayout;
