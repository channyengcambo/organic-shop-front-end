import { prodcutDetailData } from "../data/prodcutDetailData";
import RelatedProducts from "../../related-products/pages/RelatedProducts";
import HotPreview from "./hot-preview/HotPreview";
import AllProductDetailInfor from "./all-product-detail-info/AllProductDetailInfor";

const ProductDetail = () => {
  return (
    <div>
      {/* Image and prof product info */}
      <HotPreview
        allImages={prodcutDetailData.allImage}
        coverImage={prodcutDetailData.coverImage}
        title={prodcutDetailData.title}
        price={prodcutDetailData.price}
        totalPrice={prodcutDetailData.totalPrice}
        discountRate={prodcutDetailData.discountRate}
        shortDescription={prodcutDetailData.shortDiscription}
        userPreview={prodcutDetailData.totalUserFeedBack}
        preViewStar={prodcutDetailData.userRating}
        quantity={prodcutDetailData.quantity}
      />

      {/* All product detail info */}
      <AllProductDetailInfor />

      {/* Related Products */}
      <RelatedProducts />
    </div>
  );
};

export default ProductDetail;
