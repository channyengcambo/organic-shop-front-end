import { useHotPreviewStore } from "@/stores/useHotPreviewStore";
import { Modal } from "antd";
import HotPreview from "../product-detail/pages/hot-preview/HotPreview";
import { prodcutDetailData } from "../product-detail/data/prodcutDetailData";

const GlobalHotPreview = () => {
  const { open, closePreview } = useHotPreviewStore();
  return (
    <Modal
      open={open}
      onCancel={() => closePreview()}
      footer={null}
      width={1400}
    >
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
    </Modal>
  );
};

export default GlobalHotPreview;
