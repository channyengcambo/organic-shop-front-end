import { Avatar, Card, Image, Rate, Typography } from "antd";
import styles from "./ClientTestimonialCard.module.css";
import type { ClientTestimonialType } from "../../types/ClientTestimonialType";
type ClientTestimonialCardProms = {
  proms: ClientTestimonialType;
};
const ClientTestimonialCard: React.FC<ClientTestimonialCardProms> = ({
  proms,
}) => {
  const { description, userAvatar, userName, userType, userRating } = proms;
  return (
    <Card className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <Image
          src="/assets/images/client-testimonial/quoat.png"
          preview={false}
          className={styles.image}
        />
      </div>

      <Typography.Text className={`${styles.description} greyText1`}>
        {description}
      </Typography.Text>
      <div className={styles.content}>
        <div className={styles.avtarAndUsername}>
          <Avatar size={64} src={userAvatar} />
          <div>
            <Typography.Title level={5} className={styles.username}>
              {userName}
            </Typography.Title>
            <Typography.Text className={`${styles.username} greyText1`}>
              {userType}
            </Typography.Text>
          </div>
        </div>
        <Rate disabled allowHalf value={userRating} size="small" />
      </div>
    </Card>
  );
};

export default ClientTestimonialCard;
