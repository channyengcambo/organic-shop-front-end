import { Col, Image, Input, Row, Divider, Badge, Button, Flex } from "antd";
import {
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useCartDrawer } from "@/hooks/useCardDrawer";

const { Search } = Input;

const AppBar = () => {
  const { openDrawer } = useCartDrawer();

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
        <Button shape="circle">
          <HeartOutlined style={{ fontSize: 24, cursor: "pointer" }} />
        </Button>
        <Divider orientation="vertical" size="large" />
        <Flex align="center" gap={20}>
          <Badge count={5}>
            <Button shape="circle" onClick={() => openDrawer()}>
              <ShoppingCartOutlined
                style={{ fontSize: 24, cursor: "pointer" }}
              />
            </Button>
          </Badge>

          <Button shape="circle">
            <UserOutlined style={{ fontSize: 24 }} />
          </Button>
        </Flex>
      </Col>
    </Row>
  );
};

export default AppBar;
