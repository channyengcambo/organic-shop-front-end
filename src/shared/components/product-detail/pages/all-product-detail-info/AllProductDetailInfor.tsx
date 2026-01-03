import { Tabs } from "antd";
import Description from "./Description";

const AllProductDetailInfor = () => {
  return (
    <Tabs
      style={{ margin: "30px" }}
      defaultActiveKey="1"
      centered
      size="large"
      items={[
        {
          key: "1",
          label: "Descriptions",
          children: <Description />,
        },
        {
          key: "2",
          label: "Additional Information",
          children: <></>,
        },
        {
          key: "3",
          label: "Customer Feedback",
          children: <></>,
        },
      ]}
    />
  );
};

export default AllProductDetailInfor;
