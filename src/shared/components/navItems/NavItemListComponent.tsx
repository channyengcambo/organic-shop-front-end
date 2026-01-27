import { Button, Popover, Space } from "antd";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import SubNavbar from "./SubNavbar";
import { useNavbar } from "@/context/NavBarContext";

const NavItemListComponent = () => {
  const { navItems, loading, error } = useNavbar();

  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const handleToggle = (id: number) => {
    setActiveMenu((prev) => (prev === id ? null : id));
  };

  if (loading) return <p>Loading nav items...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
      {navItems?.map((item) =>
        item.children_recursive.length > 0 ? (
          <Popover
            key={item.id}
            trigger="click"
            placement="bottomLeft"
            arrow={false}
            content={<SubNavbar data={item.children_recursive} />}
            onOpenChange={() => handleToggle(0)}
          >
            <Button
              type="link"
              style={{ color: "#fff" }}
              onClick={() => handleToggle(item.id)}
            >
              <Space>
                {item.label}
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
          <Link key={item.label} to={item.full_path}>
            <Button type="link" style={{ color: "#fff" }}>
              {item.label}
            </Button>
          </Link>
        ),
      )}
    </div>
  );
};

export default NavItemListComponent;
