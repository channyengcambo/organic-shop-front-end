import { Col, Image, Input, Row, Divider, Space, Badge } from "antd";
import {
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Search } = Input;

const AppBar = () => {
  return (
    <Row
      align={"middle"}
      style={{
        width: "80%",
        margin: "0 auto",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        userSelect: "none",
      }}
    >
      <Col>
        <Image
          src="/assets/images/logo/Logo.png"
          alt="Logo image"
          preview={false}
        />
      </Col>

      <Col style={{ width: "500px" }}>
        <Search
          placeholder="Search"
          enterButton="Search"
          size="large"
          onSearch={() => {}}
          prefix={<SearchOutlined />}
          width={"100%"}
        />
      </Col>

      <Col style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <HeartOutlined style={{ fontSize: 24, cursor: "pointer" }} />
        <Divider orientation="vertical" size="large" />
        <Space align="center">
          <Badge count={5}>
            <ShoppingCartOutlined style={{ fontSize: 24, cursor: "pointer" }} />
          </Badge>
          <UserOutlined
            style={{ fontSize: 24, cursor: "pointer", marginLeft: "20px" }}
          />
        </Space>
      </Col>
    </Row>
  );
};

export default AppBar;
