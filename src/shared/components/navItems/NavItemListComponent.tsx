import { Button, Popover, Space } from "antd";
import { NavigationItems } from "./data/NavigationItems";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import SubNavbar from "./SubNavbar";

const NavItemListComponent = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const handleToggle = (id: string) => {
    setActiveMenu((prev) => (prev === id ? null : id));
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
      {NavigationItems.map((item) =>
        item.items ? (
          <Popover
            key={item.id}
            trigger="click"
            placement="bottomLeft"
            arrow={false}
            content={<SubNavbar data={item.items} />}
            onOpenChange={() => handleToggle("")}
          >
            <Button
              type="link"
              style={{ color: "#fff" }}
              onClick={() => handleToggle(item.id)}
            >
              <Space>
                {item.title}
                <FaAngleDown
                  style={{
                    marginLeft: 6,
                    transform:
                      activeMenu === item.id ? "rotate(180deg)" : "rotate(0)",
                    transition: "0.2s",
                  }}
                />
              </Space>
            </Button>
          </Popover>
        ) : (
          <Link key={item.title} to={item.link || "#"}>
            <Button type="link" style={{ color: "#fff" }}>
              {item.title}
            </Button>
          </Link>
        )
      )}
    </div>
  );
};

export default NavItemListComponent;
