import { RightOutlined } from "@ant-design/icons";
import { Collapse, type CollapseProps } from "antd";
import React from "react";

interface CollapseItem {
  key: string;
  title: React.ReactNode;
  content: React.ReactNode;
}

interface CustomCollapseProps {
  items: CollapseItem[];
  defaultActiveKeys?: string[];
}

const CustomCollapse = ({
  items,
  defaultActiveKeys = [],
}: CustomCollapseProps) => {
  const collapseItems: CollapseProps["items"] = items.map((item) => ({
    key: item.key,
    label: item.title,
    children: item.content,
  }));

  return (
    <Collapse
      ghost
      bordered={false}
      defaultActiveKey={defaultActiveKeys}
      expandIcon={({ isActive }) => (
        <RightOutlined
          rotate={isActive ? 90 : 0}
          style={{ fontSize: "12px" }}
        />
      )}
      items={collapseItems}
    />
  );
};

export default CustomCollapse;
