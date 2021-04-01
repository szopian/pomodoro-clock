import { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SettingsContext } from "../context/SettingsContext";
const CountdownAnimation = ({ key, timer, animate, children }) => {
  const { stopAnimate } = useContext(SettingsContext);

  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer * 60}
      colors={[
        ["#1b1b1b", 0.9],
        ["#FE6F6B", 0.1],
      ]}
      strokeWidth={6}
      size={220}
      trailColor="#04a7c4"
      onComplete={() => {
        stopAnimate();
      }}
    >
      {children}
    </CountdownCircleTimer>
  );
};

export default CountdownAnimation;
