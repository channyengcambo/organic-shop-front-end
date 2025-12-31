import { Tag } from "antd";
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
      style={{ padding: proms.padding || "" }}
    >
      {proms.title}
    </Tag>
  );
};

export default CustomTag;
