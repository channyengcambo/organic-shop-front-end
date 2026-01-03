import {
  FacebookOutlined,
  InstagramOutlined,
  TikTokOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

const SocailMedi = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button shape="circle">
        <FacebookOutlined style={{ fontSize: "20px" }} />
      </Button>
      <Button shape="circle">
        <InstagramOutlined style={{ fontSize: "20px" }} />
      </Button>
      <Button shape="circle">
        <TikTokOutlined style={{ fontSize: "20px" }} />
      </Button>
    </div>
  );
};

export default SocailMedi;
