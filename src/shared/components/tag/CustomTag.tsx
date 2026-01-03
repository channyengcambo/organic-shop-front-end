import { Tag, Typography } from "antd";
import type { ComponentType } from "react";
type Model = {
  title: string;
  bgColor?: string;
  padding?: string;
  isCircle?: boolean;
  startIcon?: ComponentType<{ style?: React.CSSProperties }>;
  endIcon?: ComponentType<{ style?: React.CSSProperties }>;
  textColor?: string;
};
const CustomTag = (proms: Model) => {
  return (
    <Tag
      color={proms?.bgColor}
      variant="solid"
      style={{
        width: "fit-content",
        padding: proms.padding || "2px 10px",
        borderRadius: proms.isCircle ? "50px" : "",
        display: "flex",
        alignItems: "center",
        gap: "5px",
      }}
    >
      {proms?.startIcon && <proms.startIcon style={{ fontSize: "20px" }} />}
      <Typography.Text style={{ color: proms.textColor || "#fff" }}>
        {proms.title}
      </Typography.Text>
      {proms?.endIcon && <proms.endIcon style={{ fontSize: "20px" }} />}
    </Tag>
  );
};

export default CustomTag;
