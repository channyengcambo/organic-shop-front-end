import { Col, Flex, Row, Typography } from "antd";
import { AdditionalData } from "../../../data/additionalData";

const LeftItem = () => {
  return (
    <Row gutter={[10, 10]}>
      {AdditionalData.map((item) => (
        <Col span={24} key={item.id}>
          <Flex align="flex-start" gap={5}>
            {/* Label */}
            <Typography.Title
              level={5}
              style={{
                margin: 0,
                minWidth: 140,
                maxWidth: 200,
                whiteSpace: "normal",
              }}
            >
              {item.name}:
            </Typography.Title>

            {/* Value */}
            <Typography.Text style={{ flex: 1 }}>{item.value}</Typography.Text>
          </Flex>
        </Col>
      ))}
    </Row>
  );
};

export default LeftItem;
