import AllProductDetailinfoImage from "../../all-product-detail-info-image/AllProductDetailinfoImage";
import AllProductDetailInforLayout from "../AllProductDetailInforLayout";
import LeftComponent from "./LeftComponent";

const Description = () => {
  return (
    <AllProductDetailInforLayout
      left={<LeftComponent />}
      right={<AllProductDetailinfoImage />}
    />
  );
};

export default Description;
