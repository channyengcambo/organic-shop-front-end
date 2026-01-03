import {
  FacebookOutlined,
  InstagramOutlined,
  TikTokOutlined,
} from "@ant-design/icons";

const SocailMedi = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <FacebookOutlined style={{ fontSize: "24px", cursor: "pointer" }} />
      <InstagramOutlined style={{ fontSize: "24px", cursor: "pointer" }} />
      <TikTokOutlined style={{ fontSize: "24px", cursor: "pointer" }} />
    </div>
  );
};

export default SocailMedi;
