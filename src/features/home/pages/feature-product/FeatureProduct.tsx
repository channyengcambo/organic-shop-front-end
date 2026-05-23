import SectionHeader from "@/shared/components/section-header/SectionHeader";
import { FeatureProducts } from "../../data/FeatureProductData";
import ProductCard from "@/shared/components/product-card/ProductCard";
import styles from "./FeatureProduct.module.css";

const FeatureProduct = () => {
  return (
    <div>
      <SectionHeader title="Featured Products" />
      <div className={styles.productGrid}>
        {FeatureProducts.map((item) => (
          <div key={item.id}>
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProduct;
