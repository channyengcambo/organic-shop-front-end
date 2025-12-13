import { Button, Image, Space, Typography } from "antd";

const { Title, Paragraph } = Typography;

const PageNotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Space orientation="vertical" size="middle" style={{ width: "500px" }}>
        <Image
          src="/assets/images/not-found-images/page-not-found.png"
          alt="Not found"
          width={500}
          preview={false}
        />
        <Title>Oops! page not found</Title>
        <Paragraph>
          Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros.
          Maecenas sagittis tortor at metus mollis
        </Paragraph>
        <Button type="primary" shape="round" size={"large"}>
          Back to Home
        </Button>
      </Space>
    </div>
  );
};

export default PageNotFound;
