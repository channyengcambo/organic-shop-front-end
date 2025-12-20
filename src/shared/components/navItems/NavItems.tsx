import { Typography } from "antd";
import { FiPhoneCall } from "react-icons/fi";
import NavItemListComponent from "./NavItemListComponent";

const NavItems = () => {
  return (
    <div
      style={{
        background: "#1A1A1A",
        padding: "5px 0",
      }}
    >
      <div
        style={{
          width: "80%",
          margin: "0 auto",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <NavItemListComponent />
        <Typography.Text
          style={{
            color: "#fff",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <FiPhoneCall style={{ fontSize: "24px" }} />
          (+855) 123456
        </Typography.Text>
      </div>
    </div>
  );
};

export default NavItems;
