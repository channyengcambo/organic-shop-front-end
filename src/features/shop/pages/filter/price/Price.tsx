import { MinusOutlined } from "@ant-design/icons";
import { Slider, Typography } from "antd";
import { useState } from "react";

const Price = () => {
  const [defaultPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice] = useState(500);
  const [maxScrollPrice, setMaxScrollPrice] = useState(maxPrice / 10);

  const handleChange = ([min, max]: number[]) => {
    setMinPrice(min);
    setMaxScrollPrice(max);
  };

  return (
    <div>
      <Slider
        range
        min={defaultPrice}
        max={maxPrice}
        value={[minPrice, maxScrollPrice]}
        tooltip={{ formatter: null }}
        onChange={handleChange}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          marginTop: "20px",
        }}
      >
        <Typography.Text>Price: </Typography.Text>
        <Typography.Text>${minPrice}</Typography.Text>
        <MinusOutlined />
        <Typography.Text>${maxScrollPrice}</Typography.Text>
      </div>
    </div>
  );
};

export default Price;
