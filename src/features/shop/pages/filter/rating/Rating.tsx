import { Checkbox, Flex, Rate, Typography } from "antd";

const Rating = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Checkbox>
        <Flex align="center" gap={8}>
          <Rate value={5} size="small" disabled />
          <Typography.Text>5.0</Typography.Text>
        </Flex>
      </Checkbox>
      <Checkbox>
        <Flex align="center" gap={8}>
          <Rate value={4} size="small" disabled />
          <Typography.Text>4.0 & up</Typography.Text>
        </Flex>
      </Checkbox>
      <Checkbox>
        <Flex align="center" gap={8}>
          <Rate value={3} size="small" disabled />
          <Typography.Text>3.0 & up</Typography.Text>
        </Flex>
      </Checkbox>
      <Checkbox>
        <Flex align="center" gap={8}>
          <Rate value={2} size="small" disabled />
          <Typography.Text>2.0 & up</Typography.Text>
        </Flex>
      </Checkbox>
      <Checkbox>
        <Flex align="center" gap={8}>
          <Rate value={1} size="small" disabled />
          <Typography.Text>1.0 & up</Typography.Text>
        </Flex>
      </Checkbox>
    </div>
  );
};

export default Rating;
