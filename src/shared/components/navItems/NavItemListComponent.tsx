import { Button, Popover, Space } from "antd";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import SubNavbar from "./SubNavbar";
import styles from "./NavItems.module.css";
import { navItems } from "./navItems.data";

const NavItemListComponent = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  return (
    <div className={styles.desktopNav}>
      {navItems.map((item) =>
        item.children?.length ? (
          <Popover
            key={item.id}
            trigger="click"
            placement="bottomLeft"
            arrow={false}
            content={<SubNavbar data={item.children} />}
            onOpenChange={(open) => setActiveMenu(open ? item.id : null)}
          >
            <Button
              type="link"
              onClick={() =>
                setActiveMenu((prev) => (prev === item.id ? null : item.id))
              }
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
          <Link key={item.id} to={item.fullPath}>
            <Button type="link">{item.label}</Button>
          </Link>
        ),
      )}
    </div>
  );
};

export default NavItemListComponent;
