import AllProductDetailInforLayout from "../AllProductDetailInforLayout";
import AllProductDetailinfoImage from "../../all-product-detail-info-image/AllProductDetailinfoImage";
import LeftItem from "./LeftItem";

const AdditionalInfor = () => {
  return (
    <AllProductDetailInforLayout
      left={<LeftItem />}
      right={<AllProductDetailinfoImage />}
    />
  );
};

export default AdditionalInfor;
