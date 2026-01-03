import { Avatar, Card, Flex, Rate, Typography } from "antd";
import type { customerFeedbackType } from "../product-detail/data/customerFeedbackData";
import type React from "react";
import { UserOutlined } from "@ant-design/icons";

type CustomerFeedbackCardProms = {
  cardRedius?: string;
  proms: customerFeedbackType;
};

const CustomerFeedbackCard: React.FC<CustomerFeedbackCardProms> = ({
  cardRedius,
  proms,
}) => {
  const { username, rating, message, date } = proms;
  return (
    <Card style={{ borderRadius: cardRedius || 0, width: "100%" }}>
      <Flex vertical gap={20}>
        <Flex align="start" justify="space-between">
          <Flex align="center" gap={20}>
            <Avatar icon={<UserOutlined />} size={50} />
            <Flex vertical>
              <Typography.Title level={5}>{username}</Typography.Title>
              <Rate value={rating} size="small" />
            </Flex>
          </Flex>
          <Typography.Text className="greyText1">{date}</Typography.Text>
        </Flex>
        <Typography.Text className="greyText1">{message}</Typography.Text>
      </Flex>
    </Card>
  );
};

export default CustomerFeedbackCard;
