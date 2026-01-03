import CustomTable from "@/shared/components/custom-table/pages/CustomTable";
import SectionHeader from "@/shared/components/section-header/SectionHeader";
import { wishListData } from "../data/wishListData";
import { wishListTablHeader } from "../data/wishListTableHeader";
import WishListTableFotter from "./WishListTableFotter";

const WishList = () => {
  return (
    <div>
      <SectionHeader title="My Wishlist" isTtileCenter isShowViewMore={false} />
      <CustomTable
        data={wishListData}
        columns={wishListTablHeader}
        footer={() => <WishListTableFotter />}
      />
    </div>
  );
};

export default WishList;
