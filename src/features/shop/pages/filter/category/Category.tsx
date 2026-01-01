import { CategoryData } from "@/features/shop/data/CategoryData";
import { Radio, type RadioChangeEvent } from "antd";
import { useState } from "react";

const Category = () => {
  const [value, setValue] = useState(null);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  return (
    <Radio.Group
      vertical
      onChange={onChange}
      value={value}
      options={CategoryData}
    />
  );
};

export default Category;
