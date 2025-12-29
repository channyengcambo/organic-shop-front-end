import { theme, Typography } from "antd";
import type { CustomerFeatureType } from "../../types/CustomerFeatureType";

const GridItem = (proms: CustomerFeatureType) => {
  const { token } = theme.useToken();
  const Icon = proms.icon;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
      <Icon style={{ fontSize: "36px", color: token.colorPrimary }} />
      <div>
        <Typography.Title level={5}>{proms.title}</Typography.Title>
        <Typography>{proms.subTitle}</Typography>
      </div>
    </div>
  );
};

export default GridItem;
