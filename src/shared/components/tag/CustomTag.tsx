import { Tag, Typography } from "antd";
type Model = {
  title: string;
  bgColor?: string;
  padding?: string;
};
const CustomTag = (proms: Model) => {
  return (
    <Tag
      color={proms?.bgColor}
      variant="solid"
      style={{ padding: proms.padding || "2px 10px" }}
    >
      <Typography.Text style={{ color: "#fff" }}>{proms.title}</Typography.Text>
    </Tag>
  );
};

export default CustomTag;
