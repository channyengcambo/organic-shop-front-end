import { Badge, Button, Image, Input, Tooltip } from "antd";
import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useCartDrawer } from "@/hooks/useCardDrawer";
import { useNavigate } from "react-router-dom";
import styles from "./AppBar.module.css";

const { Search } = Input;

const AppBar = () => {
  const navigate = useNavigate();

  const { openDrawer } = useCartDrawer();

  return (
    <div className={styles.appBar}>
      <div className={styles.logo}>
        <Image
          src="/assets/images/logo/Logo.png"
          alt="Logo image"
          preview={false}
        />
      </div>

      <div className={styles.search}>
        <Search
          placeholder="Search products"
          enterButton="Search"
          size="large"
          onSearch={() => {}}
          prefix={<SearchOutlined />}
        />
      </div>

      <div className={styles.actions}>
        <Tooltip title="Wishlist">
          <Button
            aria-label="Open wishlist"
            className={styles.actionButton}
            shape="circle"
            onClick={() => navigate("/my-wishlist")}
          >
            <HeartOutlined style={{ fontSize: 21 }} />
          </Button>
        </Tooltip>
        <Tooltip title="Cart">
          <Badge count={5}>
            <Button
              aria-label="Open cart"
              className={styles.actionButton}
              shape="circle"
              onClick={() => openDrawer()}
            >
              <ShoppingCartOutlined style={{ fontSize: 21 }} />
            </Button>
          </Badge>
        </Tooltip>
        <Tooltip title="Account">
          <Button
            aria-label="Open account"
            className={styles.actionButton}
            shape="circle"
          >
            <UserOutlined style={{ fontSize: 21 }} />
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default AppBar;
