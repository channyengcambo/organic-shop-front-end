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
    <Row gutter={gutter}>
      <Col span={leftSpan}>{left}</Col>
      <Col span={rightSpan}>{right}</Col>
    </Row>
  );
};

export default AllProductDetailInforLayout;
