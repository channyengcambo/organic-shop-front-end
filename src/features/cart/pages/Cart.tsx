import CustomTable from "@/shared/components/custom-table/pages/CustomTable";
import SectionHeader from "@/shared/components/section-header/SectionHeader";
import { Col, Row } from "antd";
import { cartData } from "../data/cartData";
import { cartTableHeader } from "./cartTableHeader";
import TotalCart from "./TotalCart";
import CartFooter from "./CartFooter";
import CouponCode from "./CouponCode";
import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.cartPage}>
      <SectionHeader
        title="My Shopping Cart"
        isTtileCenter
        isShowViewMore={false}
      />
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={18} className={styles.tableArea}>
          <CustomTable
            data={cartData}
            columns={cartTableHeader}
            footer={() => <CartFooter />}
          />
          <CouponCode />
        </Col>
        <Col xs={24} lg={6} className={styles.summaryArea}>
          <TotalCart />
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
