import {
  PopularTagData,
  type PopularTagType,
} from "@/features/shop/data/PopularTagData";
import CustomTag from "@/shared/components/tag/CustomTag";

const PopularTags = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {PopularTagData.map((item: PopularTagType) => (
        <CustomTag
          title={item.title}
          key={item.id}
          isCircle
          bgColor="#00B207"
        />
      ))}
    </div>
  );
};

export default PopularTags;
