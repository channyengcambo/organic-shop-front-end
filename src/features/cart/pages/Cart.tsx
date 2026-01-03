import CustomTable from "@/shared/components/custom-table/pages/CustomTable";
import SectionHeader from "@/shared/components/section-header/SectionHeader";
import { Col, Row } from "antd";
import { cartData } from "../data/cartData";
import { cartTableHeader } from "./cartTableHeader";
import TotalCart from "./TotalCart";
import CartFooter from "./CartFooter";
import CouponCode from "./CouponCode";

const Cart = () => {
  return (
    <div>
      <SectionHeader
        title="My Shopping Cart"
        isTtileCenter
        isShowViewMore={false}
      />
      <Row gutter={24}>
        <Col span={18}>
          <CustomTable
            data={cartData}
            columns={cartTableHeader}
            footer={() => <CartFooter />}
          />
          <CouponCode />
        </Col>
        <Col span={6}>
          <TotalCart />
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
