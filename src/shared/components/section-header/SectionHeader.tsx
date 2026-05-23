import type { SectionHeaderType } from "@/shared/types/SectionHeaderType";
import {
  ArrowRightOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Button, theme, Typography } from "antd";
import styles from "./SectionHeader.module.css";

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
      className={styles.sectionHeader}
      style={{
        margin: margin || "30px 0 10px 0",
      }}
    >
      <Typography.Title
        className={`${styles.title} ${isTtileCenter ? styles.centerTitle : ""}`}
        level={3}
      >
        {title}
      </Typography.Title>

      <div className={styles.actions}>
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
