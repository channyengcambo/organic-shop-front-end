import { HomeOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import type { NavigationMenuItem } from "./types/NavigationItemType";
type SubNavbarItem = {
  data: NavigationMenuItem[];
};
const SubNavbar = ({ data }: SubNavbarItem) => {
  return (
    <div
      style={{
        width: "400px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 2,
      }}
    >
      {data.map((item, index) => (
        <Button
          type="text"
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "4px",
          }}
        >
          <Typography>{item.title}</Typography>
          <HomeOutlined />
        </Button>
      ))}
    </div>
  );
};

export default SubNavbar;
