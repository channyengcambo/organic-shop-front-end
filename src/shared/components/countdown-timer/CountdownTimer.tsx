import { useEffect, useState } from "react";
import styles from "./CountdownTimer.module.css";
import type { CountdownTimerType } from "@/shared/types/CountdownTimerType";

interface CountdownTimerProps {
  targetDate: Date;
  proms?: CountdownTimerType;
}

const CountdownTimer = ({ targetDate, proms }: CountdownTimerProps) => {
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
      className={`${styles.timerContainer} ${proms?.isShowBgColor ? styles.timerContainerBg : ""}`}
    >
      <TimeBox value={format(timeLeft.days)} label="DAYS" />
      <Separator />
      <TimeBox value={format(timeLeft.hours)} label="HOURS" />
      <Separator />
      <TimeBox value={format(timeLeft.minutes)} label="MINS" />
      <Separator />
      <TimeBox value={format(timeLeft.seconds)} label="SECS" />
    </div>
  );
};

export default CountdownTimer;

const TimeBox = ({ value, label }: { value: string; label: string }) => (
  <div className={styles.timeBox}>
    <div className={styles.value}>{value}</div>
    <div className={styles.label}>{label}</div>
  </div>
);

const Separator = () => <div className={styles.separator}>:</div>;
