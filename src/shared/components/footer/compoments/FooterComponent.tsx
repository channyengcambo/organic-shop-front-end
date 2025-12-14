import { Col, Divider, Image, Row, Typography } from "antd";
import FooterListComponent from "./FooterListComponent";
import {
  FirstList,
  FourthList,
  PaymentItem,
  SecondList,
  ThirthList,
} from "../data/FooterLiteItems";

const { Paragraph } = Typography;

const FooterComponent = () => {
  return (
    <div>
      <Row
        style={{
          width: "80%",
          margin: "0 auto",
        }}
      >
        <Col span={8}>
          <Image
            src="/assets/images/logo/Logo-white.png"
            alt="Logo image"
            preview={false}
          />
          <Paragraph style={{ margin: "20px 0", color: "#fff" }}>
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magna congue nec.
          </Paragraph>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              color: "#fff",
            }}
          >
            <a>(+855) 123456789</a>
            Or
            <a>organic@gmail.com</a>
          </div>
        </Col>
        <Col span={4}>
          <FooterListComponent
            items={FirstList.items}
            title={FirstList.title}
          />
        </Col>
        <Col span={4}>
          <FooterListComponent
            items={SecondList.items}
            title={SecondList.title}
          />
        </Col>
        <Col span={4}>
          <FooterListComponent
            items={ThirthList.items}
            title={ThirthList.title}
          />
        </Col>
        <Col span={4}>
          <FooterListComponent
            items={FourthList.items}
            title={FourthList.title}
          />
        </Col>
      </Row>

      <div
        style={{
          width: "80%",
          margin: "0 auto",
        }}
      >
        <Divider style={{ background: "#99a1af" }} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography.Text style={{ color: "#fff " }}>
            Ecobazar eCommerce © 2021. All Rights Reserved
          </Typography.Text>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {PaymentItem.map((value: string, index: number) => (
              <Image src={value} key={index} preview={false} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
