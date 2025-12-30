import { Tag } from "antd";
type Model = {
  title: string;
  bgColor?: string;
};
const CustomTag = (proms: Model) => {
  return (
    <Tag color={proms?.bgColor} variant="solid">
      {proms.title}
    </Tag>
  );
};

export default CustomTag;
