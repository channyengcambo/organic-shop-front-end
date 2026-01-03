import { Tabs } from "antd";
import Description from "./description/Description";
import AdditionalInfor from "./additional-infor/AdditionalInfor";
import CustomerFeedback from "./customer-feedback/CustomerFeedback";

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
          children: <AdditionalInfor />,
        },
        {
          key: "3",
          label: "Customer Feedback",
          children: <CustomerFeedback />,
        },
      ]}
    />
  );
};

export default AllProductDetailInfor;
