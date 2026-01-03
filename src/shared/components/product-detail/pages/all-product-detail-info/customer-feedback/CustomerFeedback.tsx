import AllProductDetailInforLayout from "../AllProductDetailInforLayout";
import LeftItem from "./LeftItem";

const CustomerFeedback = () => {
  return (
    <AllProductDetailInforLayout
      left={<LeftItem />}
      leftSpan={16}
      right={<></>}
      rightSpan={8}
    />
  );
};

export default CustomerFeedback;
