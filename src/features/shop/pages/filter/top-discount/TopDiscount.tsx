import { Carousel } from "antd";
import styles from "./TopDiscount.module.css";
import { FlashSaleData } from "@/features/home/data/FalshSaleData";
import FlshsaleCard from "@/features/home/pages/flash-sale/FlshsaleCard";

const TopDiscount = () => {
  return (
    <div className={styles.main}>
      <Carousel arrows infinite={true} autoplay>
        {FlashSaleData.map((item) => (
          <FlshsaleCard
            proms={item}
            key={item.id}
            titleSize={3}
            cardHeight="450px"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default TopDiscount;
