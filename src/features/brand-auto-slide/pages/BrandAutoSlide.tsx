import { Carousel, Image } from "antd";
import styles from "./BrandAutoSlide.module.css";
import { BrandAutoSlideData } from "../data/BrandAutoSlideData";
import SectionHeader from "@/shared/components/section-header/SectionHeader";

const BrandAutoSlide = () => {
  return (
    <div className={styles.contentWrapper}>
      <SectionHeader
        title="Our Partners"
        isTtileCenter={true}
        isShowViewMore={false}
      />
      <div className={styles.brandWrapper}>
        <Carousel autoplay dots={false} slidesToShow={6} infinite>
          {BrandAutoSlideData.map((brand) => (
            <div key={brand.id} className={styles.brandItem}>
              <Image
                src={brand.image}
                preview={false}
                className={styles.brandImage}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default BrandAutoSlide;
