import { Button, Card, Image, Typography } from "antd";
import styles from "./LatestNewsCard.module.css";
import type { LatestNewType } from "../../types/LatestNewsType";
import type React from "react";
import {
  ArrowRightOutlined,
  CommentOutlined,
  TagOutlined,
  UserOutlined,
} from "@ant-design/icons";
type LatestNewsProms = {
  proms: LatestNewType;
};
const LatestnewsCard: React.FC<LatestNewsProms> = ({ proms }) => {
  const {
    tagsList,
    author,
    totalComment,
    title,
    imageCover,
  } = proms;
  return (
    <Card className={styles.cardContainer} hoverable>
      {/* Image */}
      <div className={styles.imageWrapper}>
        <Image
          src={imageCover}
          alt={title}
          preview={false}
          className={styles.image}
        />
        <div className={styles.postDated}>
          <Typography.Title className={styles.postDatedText} level={4}>
            29
          </Typography.Title>
          <Typography.Text className="greyText">Feb</Typography.Text>
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          {/* Tags */}
          <div className={styles.contentHeaderItem}>
            <TagOutlined className={styles.contentIcon} />
            {tagsList?.map((item: string, index: number) => (
              <Typography.Title
                className={`${styles.contentHeaderTag} greyText1`}
                level={5}
                key={index}
              >
                {item}
              </Typography.Title>
            ))}
          </div>

          {/* Author */}
          <div className={styles.contentHeaderItem}>
            <UserOutlined className={styles.contentIcon} />

            <Typography.Title
              className={`${styles.contentHeaderTag} greyText1`}
              level={5}
            >
              {author}
            </Typography.Title>
          </div>

          {/* Total conmments */}
          <div className={styles.contentHeaderItem}>
            <CommentOutlined className={styles.contentIcon} />

            <Typography.Title
              className={`${styles.contentHeaderTag} greyText1`}
              level={5}
            >
              {totalComment} Comments
            </Typography.Title>
          </div>
        </div>
        <Typography.Title
          level={5}
          className={`${styles.contentHeaderTag} ${styles.contentTitle}`}
        >
          {title}
        </Typography.Title>
        <Button style={{ marginTop: "15px" }}>
          Read more <ArrowRightOutlined />
        </Button>
      </div>
    </Card>
  );
};

export default LatestnewsCard;
