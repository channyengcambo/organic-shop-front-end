import { Button, Col, Row, theme, Typography } from "antd";
import MainCard from "./MainCard";
import SecondCard from "./SecondCard";
import { IoArrowForward } from "react-icons/io5";

const HeroComponent = () => {
  const { token } = theme.useToken();
  return (
    <Row style={{ padding: "20px 0", height: "60vh" }} gutter={16}>
      <Col span={16}>
        <MainCard />
      </Col>
      <Col
        span={8}
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <SecondCard image="/assets/images/hero/2.jpg">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              color: "#000",
            }}
          >
            <h4>SUMMER SALE</h4>
            <h1>75% OFF</h1>
            <p>Only Fruit & Vegetable</p>
            <Button type="text">
              <Typography style={{ color: `${token.colorPrimary}` }}>
                Shop now
              </Typography>
              <IoArrowForward style={{ color: token.colorPrimary }} />
            </Button>
          </div>
        </SecondCard>
        <SecondCard image="/assets/images/hero/3.jpg" imageBlur={2.5}>
          <div
            style={{
              width: "70%",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h4>Best Deal</h4>
            <h1>Special Products Deal of the Month</h1>
            <Button>
              <Typography style={{ color: `${token.colorPrimary}` }}>
                Shop now
              </Typography>
              <IoArrowForward style={{ color: token.colorPrimary }} />
            </Button>
          </div>
        </SecondCard>
      </Col>
    </Row>
  );
};

export default HeroComponent;
