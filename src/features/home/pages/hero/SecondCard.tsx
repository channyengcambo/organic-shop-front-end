import { Card } from "antd";
import React from "react";
import styles from "./HeroComponent.module.css";
interface SecondCardProps extends React.PropsWithChildren {
  image: string;
  children: React.ReactNode;
  isDark?: boolean;
}

const SecondCard = ({ children, image, isDark = false }: SecondCardProps) => {
  return (
    <Card className={styles.promoCard}>
      <div
        className={styles.promoImage}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div
        className={`${styles.promoOverlay} ${isDark ? styles.darkOverlay : ""}`}
      />
      <div className={styles.promoContent}>
        {children}
      </div>
    </Card>
  );
};

export default SecondCard;
