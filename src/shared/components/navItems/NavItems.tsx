import { Button, Drawer, Typography } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { FiPhoneCall } from "react-icons/fi";
import NavItemListComponent from "./NavItemListComponent";
import { navItems } from "./navItems.data";
import BreadCrumb from "../bread-crumb/BreadCrumb";
import styles from "./NavItems.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavItems = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className={styles.navWrap}>
        <div className={styles.inner}>
          <Button
            aria-label="Open navigation menu"
            className={styles.mobileMenuButton}
            icon={<MenuOutlined />}
            type="text"
            onClick={() => setOpen(true)}
          >
            Menu
          </Button>
          <NavItemListComponent />
          <Typography.Text className={styles.phone}>
            <FiPhoneCall style={{ fontSize: "24px" }} />
            (+855) 123456
          </Typography.Text>
        </div>
      </div>
      <Drawer
        title="Navigation"
        placement="left"
        open={open}
        width={300}
        onClose={() => setOpen(false)}
      >
        <nav className={styles.drawerNav} aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              className={styles.drawerLink}
              key={item.id}
              to={item.fullPath}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Drawer>
      <BreadCrumb />
    </div>
  );
};

export default NavItems;
