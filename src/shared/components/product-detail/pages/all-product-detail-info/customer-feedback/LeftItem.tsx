import { Button, Col, Flex, Row, theme } from "antd";
import {
  customerFeedbackData,
  type customerFeedbackType,
} from "../../../data/customerFeedbackData";
import CustomerFeedbackCard from "@/shared/components/customer-feedback-card/CustomerFeedbackCard";

const LeftItem = () => {
  const { token } = theme.useToken();

  return (
    <Flex vertical gap={30} justify="start" align="end">
      <Row>
        {customerFeedbackData.map((item: customerFeedbackType) => (
          <Col span={24} key={item.id}>
            <CustomerFeedbackCard proms={item} />
          </Col>
        ))}
      </Row>
      <Button
        style={{
          borderRadius: "50px",
          backgroundColor: token.colorPrimary,
          color: "#fff",
        }}
      >
        Learn more
      </Button>
    </Flex>
  );
};

export default LeftItem;
