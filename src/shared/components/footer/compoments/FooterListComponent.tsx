import { Space, Typography } from "antd";
import styles from "../styles/FooterListComponent.module.css";
import type {
  FooterListItem,
  FooterListItemType,
} from "../types/FooterListItemType";

const FooterListComponent: React.FC<FooterListItemType> = ({
  title,
  items,
}) => {
  return (
    <Space
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      <Typography.Title level={5} className={styles.footerItemHead}>
        {title}
      </Typography.Title>
      <ul className={styles.ul}>
        {items.map((item: FooterListItem, index: number) => (
          <li key={index} className={styles.li}>
            {item.title}
          </li>
        ))}
      </ul>
    </Space>
  );
};

export default FooterListComponent;
