import SectionHeader from "@/shared/components/section-header/SectionHeader";
import { HotDealData } from "../../data/HotDealData";
import ProductCard from "@/shared/components/product-card/ProductCard";
import styles from "./HotDeteal.module.css";

const HotDeteal = () => {
  return (
    <div>
      <SectionHeader title="Hot Deal" />
      <div className={styles.productGrid}>
        {HotDealData.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.gridItem} ${
              index === 0 ? styles.featuredItem : ""
            }`}
          >
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotDeteal;
