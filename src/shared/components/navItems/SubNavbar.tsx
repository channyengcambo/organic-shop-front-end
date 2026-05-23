import { RightOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import { Link } from "react-router-dom";
import type { StaticNavItem } from "./navItems.data";

type SubNavbarItem = {
  data: StaticNavItem[];
};

const SubNavbar = ({ data }: SubNavbarItem) => {
  return (
    <div
      style={{
        width: "min(320px, calc(100vw - 48px))",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 2,
      }}
    >
      {data.map((item) => (
        <Link
          to={item.fullPath}
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
            <RightOutlined />
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default SubNavbar;
