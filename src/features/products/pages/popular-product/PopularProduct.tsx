import ProductCard from "@/shared/components/product-card/ProductCard";
import SectionHeader from "@/shared/components/section-header/SectionHeader";
import { PopularProductData } from "../../data/PopularProductData";
import styles from "./PopularProduct.module.css";

const PopularProduct = () => {
  return (
    <div>
      <SectionHeader title="Popular Products" />
      <div className={styles.productGrid}>
        {PopularProductData.map((item) => (
          <div key={item.id}>
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProduct;
