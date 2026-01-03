import { Button, Col, Input, Row, Space, Typography } from "antd";
import SocailMedi from "../../socail-medi/SocailMedi";

const SubscribeSection = () => {
  return (
    <div
      style={{
        background: "#fff",
        marginTop: "30px",
      }}
    >
      <Row
        align={"middle"}
        style={{ padding: "40px 0", width: "80%", margin: "0 auto" }}
      >
        <Col span={8}>
          <Typography.Title level={4}>Subcribe our Newsletter</Typography.Title>
          <Typography.Text className="greyText">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna.
          </Typography.Text>
        </Col>
        <Col span={4}></Col>
        <Col
          span={10}
          style={{ display: "flex", alignItems: "center", gap: "30px" }}
        >
          <Space.Compact style={{ width: "100%" }}>
            <Input placeholder="Your email address" type="email" />
            <Button type="primary">Subscribe</Button>
          </Space.Compact>
          <SocailMedi />
        </Col>
      </Row>
    </div>
  );
};

export default SubscribeSection;
