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
            role="button"
            tabIndex={0}
            className={`${styles.thumb} ${
              activeImage === img ? styles.active : ""
            }`}
            onClick={() => setActiveImage(img)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                setActiveImage(img);
              }
            }}
          >
            <img src={img} alt={`Product thumbnail ${i + 1}`} />
          </div>
        ))}
      </div>

      <div className={styles.right}>
        <img src={activeImage} alt="Selected product" />
      </div>
    </div>
  );
};

export default ProductImages;
