import { HomeOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import type { NavigationMenuItem } from "./types/NavigationItemType";
import { Link } from "react-router-dom";
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
      {data.map((item) => (
        <Link
          to={item?.full_path || ""}
          key={item.id}
          style={{ width: "100%" }}
        >
          <Button
            type="text"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: "4px",
              width: "100%",
            }}
          >
            <Typography>{item.label}</Typography>
            <HomeOutlined />
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default SubNavbar;
