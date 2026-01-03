import { theme, Typography } from "antd";
import type { CustomerFeatureType } from "../../types/CustomerFeatureType";

type GridItemProms = {
  proms: CustomerFeatureType;
  subTitleColor?: string;
};

const GridItem: React.FC<GridItemProms> = ({ subTitleColor, proms }) => {
  const { token } = theme.useToken();
  const Icon = proms.icon;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
      <Icon style={{ fontSize: "36px", color: token.colorPrimary }} />
      <div>
        <Typography.Title level={5}>{proms.title}</Typography.Title>
        <Typography style={{ color: subTitleColor || "#71717b" }}>
          {proms.subTitle}
        </Typography>
      </div>
    </div>
  );
};

export default GridItem;
