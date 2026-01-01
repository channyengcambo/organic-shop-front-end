import type { PopularProductType } from "@/features/products/types/PopularProductType";
import { Card, Flex, Image, Rate, Typography } from "antd";
import React from "react";
import styles from "./SaleProductCard.module.css";

type SaleProductCardProms = {
  proms: PopularProductType;
};
const SaleProductCard: React.FC<SaleProductCardProms> = ({ proms }) => {
  const { coverImage, title, price, totalPrice, userRating } = proms;
  return (
    <Card hoverable className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.imageContainer}>
          <Image
            src={coverImage}
            alt={title}
            preview={false}
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <Typography.Text className={styles.title}>{title}</Typography.Text>
          <Flex align="center" gap={5} style={{ margin: "5px 0" }}>
            <Typography.Title level={5} style={{ margin: 0 }}>
              ${totalPrice}
            </Typography.Title>
            <Typography.Title level={5} className={styles.price}>
              ${price}
            </Typography.Title>
          </Flex>
          <Rate value={userRating} size="small" disabled />
        </div>
      </div>
    </Card>
  );
};

export default SaleProductCard;
