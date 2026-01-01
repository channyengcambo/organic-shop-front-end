import { Card, Typography } from "antd";
import styles from "./BreadCrumb.module.css";
import { Link, useMatches } from "react-router-dom";

const BreadCrumb = () => {
  const matches = useMatches();

  const shouldHide = matches.some((match: any) => match.handle?.hideBreadcrumb);

  if (shouldHide) return null;

  const breadcrumbs = matches
    .filter((match: any) => match.handle?.breadcrumb)
    .map((match: any) => ({
      label: match.handle.breadcrumb,
      path: match.pathname,
    }));

  return (
    <Card className={styles.flashCard}>
      <div
        className={styles.bg}
        style={{ backgroundImage: `url("/assets/images/bread-crum.jpg")` }}
      >
        <div className={styles.overlayContent}>
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.path}>
              <Link to={crumb.path}>
                <Typography.Text className={styles.titleText}>
                  {crumb.label}
                </Typography.Text>
              </Link>
              {index < breadcrumbs.length - 1 && " / "}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default BreadCrumb;
