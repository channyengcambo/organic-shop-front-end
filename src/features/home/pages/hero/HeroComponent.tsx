import { Button, Col, Row, theme, Typography } from "antd";
import MainCard from "./MainCard";
import SecondCard from "./SecondCard";
import { IoArrowForward } from "react-icons/io5";
import styles from "./HeroComponent.module.css";

const HeroComponent = () => {
  const { token } = theme.useToken();
  return (
    <Row className={styles.hero} gutter={[18, 18]}>
      <Col xs={24} lg={16}>
        <MainCard />
      </Col>
      <Col xs={24} lg={8} className={styles.sideColumn}>
        <SecondCard image="/assets/images/hero/2.jpg">
          <div className={`${styles.promoCenter} ${styles.promoRight}`}>
            <h4 className={styles.promoEyebrow}>Summer Sale</h4>
            <h1 className={styles.promoTitle}>75% OFF</h1>
            <p className={styles.promoText}>Only Fruit & Vegetable</p>
            <Button type="text" className={styles.shopButton}>
              <Typography style={{ color: `${token.colorPrimary}` }}>
                Shop now
              </Typography>
              <IoArrowForward style={{ color: token.colorPrimary }} />
            </Button>
          </div>
        </SecondCard>
        <SecondCard image="/assets/images/hero/3.jpg" isDark>
          <div className={styles.promoCenter}>
            <h4 className={styles.promoEyebrow}>Best Deal</h4>
            <h1 className={styles.promoTitle}>Special Products Deal</h1>
            <Button className={styles.shopButton}>
              <Typography style={{ color: `${token.colorPrimary}` }}>
                Shop now
              </Typography>
              <IoArrowForward style={{ color: token.colorPrimary }} />
            </Button>
          </div>
        </SecondCard>
      </Col>
    </Row>
  );
};

export default HeroComponent;
