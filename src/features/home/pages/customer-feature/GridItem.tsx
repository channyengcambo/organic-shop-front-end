import { theme, Typography } from "antd";
import type { CustomerFeatureType } from "../../types/CustomerFeatureType";
import styles from "./CustomerFeature.module.css";

type GridItemProms = {
  proms: CustomerFeatureType;
  subTitleColor?: string;
};

const GridItem: React.FC<GridItemProms> = ({ subTitleColor, proms }) => {
  const { token } = theme.useToken();
  const Icon = proms.icon;

  return (
    <div className={styles.feature}>
      <span className={styles.icon}>
        <Icon style={{ color: token.colorPrimary }} />
      </span>
      <div>
        <Typography.Title className={styles.title} level={5}>
          {proms.title}
        </Typography.Title>
        <Typography
          className={styles.subTitle}
          style={{ color: subTitleColor }}
        >
          {proms.subTitle}
        </Typography>
      </div>
    </div>
  );
};

export default GridItem;
