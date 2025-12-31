import type { SectionHeaderType } from "@/shared/types/SectionHeaderType";
import {
  ArrowRightOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Button, theme, Typography } from "antd";

const SectionHeader: React.FC<SectionHeaderType> = ({
  title,
  isTtileCenter = false,
  isShowViewMore = true,
  isShowNextIcon,
  isShowPreviousIcon,
  nextIconBgColor,
  nextIconColor,
  previousIconBgColor,
  previousIconColor,
  margin,
}) => {
  const { token } = theme.useToken();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: margin || "30px 0 10px 0",
      }}
    >
      <Typography.Title
        level={3}
        style={{ textAlign: isTtileCenter ? "center" : "left", width: "100%" }}
      >
        {title}
      </Typography.Title>

      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {isShowViewMore && (
          <Button
            type="text"
            style={{ color: token.colorPrimary }}
            onClick={() => {}}
          >
            View more <ArrowRightOutlined />
          </Button>
        )}
        {isShowPreviousIcon && (
          <Button
            shape="circle"
            icon={<LeftOutlined style={{ fontSize: "16px" }} />}
            style={{
              backgroundColor: previousIconBgColor || "",
              color: previousIconColor || "",
            }}
            onClick={() => {}}
          />
        )}
        {isShowNextIcon && (
          <Button
            shape="circle"
            icon={<RightOutlined style={{ fontSize: "16px" }} />}
            style={{
              backgroundColor: nextIconBgColor || token.colorPrimary,
              color: nextIconColor || "#fff",
            }}
            onClick={() => {}}
          />
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
