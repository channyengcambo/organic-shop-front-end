import { Card } from "antd";
import React from "react";
interface SecondCardProps extends React.PropsWithChildren {
  image: string;
  children: React.ReactNode;
  imageBlur?: number;
}

const SecondCard = ({ children, image, imageBlur = 0 }: SecondCardProps) => {
  return (
    <Card
      style={{
        position: "relative",
        overflow: "hidden",
        height: "50%",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          filter: `blur(${imageBlur}px)`,
          transform: "scale(1.1)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          color: "#fff",
        }}
      >
        {children}
      </div>
    </Card>
  );
};

export default SecondCard;
