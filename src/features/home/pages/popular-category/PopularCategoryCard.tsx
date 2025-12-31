import { Card } from "antd";
import styles from "./PouplarCategory.module.css";
import type { PopularCategoryType } from "../../types/PopularCategoryType";

const { Meta } = Card;

const PopularCategoryCard = (proms: PopularCategoryType) => {
  return (
    <Card
      className={styles.productCard}
      hoverable
      cover={<img draggable={false} alt={proms.title} src={proms.image} />}
    >
      <Meta title={proms.title} className={styles.cardTitle} />
    </Card>
  );
};

export default PopularCategoryCard;
