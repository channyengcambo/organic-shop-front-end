import styles from "./ProductImages.module.css";
import { useState } from "react";
type ProductImageProms = {
  coverImage?: string;
  allImages?: string[];
};

const ProductImages = ({ coverImage, allImages }: ProductImageProms) => {
  const [activeImage, setActiveImage] = useState(coverImage);

  return (
    <div className={styles.root}>
      <div className={styles.left}>
        {allImages?.map((img, i) => (
          <div
            key={i}
            className={`${styles.thumb} ${
              activeImage === img ? styles.active : ""
            }`}
            onClick={() => setActiveImage(img)}
          >
            <img src={img} />
          </div>
        ))}
      </div>

      <div className={styles.right}>
        <img src={activeImage} />
      </div>
    </div>
  );
};

export default ProductImages;
