import { useEffect, useState } from "react";
import styles from "./CountdownTimer.module.css";

interface CountdownTimerProps {
  targetDate: Date;
  isShowBgColor?: boolean;
  timeColor?: string;
  timeMarkColor?: string;
}

const CountdownTimer = ({
  targetDate,
  isShowBgColor,
  timeColor,
  timeMarkColor,
}: CountdownTimerProps) => {
  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (num: number) => String(num).padStart(2, "0");

  return (
    <div
      className={`${styles.timerContainer} ${isShowBgColor ? styles.timerContainerBg : ""}`}
    >
      <TimeBox
        value={format(timeLeft.days)}
        label="DAYS"
        timeColor={timeColor}
        timeMarkColor={timeMarkColor}
      />
      <Separator />
      <TimeBox
        value={format(timeLeft.hours)}
        label="HOURS"
        timeColor={timeColor}
        timeMarkColor={timeMarkColor}
      />
      <Separator />
      <TimeBox
        value={format(timeLeft.minutes)}
        label="MINS"
        timeColor={timeColor}
        timeMarkColor={timeMarkColor}
      />
      <Separator />
      <TimeBox
        value={format(timeLeft.seconds)}
        label="SECS"
        timeColor={timeColor}
        timeMarkColor={timeMarkColor}
      />
    </div>
  );
};

export default CountdownTimer;

const TimeBox = ({
  value,
  label,
  timeColor,
  timeMarkColor,
}: {
  value: string;
  label: string;
  timeColor?: string;
  timeMarkColor?: string;
}) => (
  <div className={styles.timeBox}>
    <div className={styles.value} style={{ color: timeColor || "" }}>
      {value}
    </div>
    <div className={styles.label} style={{ color: timeMarkColor || "" }}>
      {label}
    </div>
  </div>
);

const Separator = () => <div className={styles.separator}>:</div>;
