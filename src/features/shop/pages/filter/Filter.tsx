import CustomCollapse from "@/shared/components/custom-collapse/custom-collapse";
import CustomTag from "@/shared/components/tag/CustomTag";
import { FilterOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import Category from "./category/Category";
import Price from "./price/Price";
import Rating from "./rating/Rating";
import PopularTags from "./popular-tags/PopularTags";
import TopDiscount from "./top-discount/TopDiscount";
import SaleProduct from "./sale-product/SaleProduct";

const Filter = () => {
  return (
    <div>
      <CustomTag
        title="Filter"
        bgColor="#2C742F"
        padding="8px 25px"
        isCircle
        endIcon={FilterOutlined}
      />
      <div style={{ margin: "10px 0" }}></div>
      <CustomCollapse
        defaultActiveKeys={["1", "2", "3", "4"]}
        items={[
          {
            key: "1",
            title: (
              <Typography.Title
                level={5}
                style={{ margin: "0", fontWeight: "normal" }}
              >
                All Catetegories
              </Typography.Title>
            ),
            content: <Category />,
          },
          {
            key: "2",
            title: (
              <Typography.Title
                level={5}
                style={{ margin: "0", fontWeight: "normal" }}
              >
                Price
              </Typography.Title>
            ),
            content: <Price />,
          },
          {
            key: "3",
            title: (
              <Typography.Title
                level={5}
                style={{ margin: "0", fontWeight: "normal" }}
              >
                Rating
              </Typography.Title>
            ),
            content: <Rating />,
          },
          {
            key: "4",
            title: (
              <Typography.Title
                level={5}
                style={{ margin: "0", fontWeight: "normal" }}
              >
                Popular Tags
              </Typography.Title>
            ),
            content: <PopularTags />,
          },
        ]}
      />

      <TopDiscount />
      <SaleProduct />
    </div>
  );
};

export default Filter;
