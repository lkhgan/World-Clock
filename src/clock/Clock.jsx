import styled from "styled-components";
import ClockBackGround from "./ClockBackground";
import ClockPointer from "../pointer/ClockPointer";
import { useEffect, useState } from "react";

const Clock = (props) => {
  const [light, setLight] = useState(true);
  const [hourDeg, setHourDeg] = useState(0);
  const [minuteDeg, setMinuteDeg] = useState(0);
  const [secondDeg, setSecondDeg] = useState(0);
  const [Hour, setHour] = useState();

  const deg = 6;

  const setTime = () => {
    let nowTime = new Date();
    let day = new Date(nowTime.getTime() + props.timezone * 3600000);
    let hour = day.getUTCHours() * deg * 5;
    let minute = day.getUTCMinutes() * deg;
    let second = day.getUTCSeconds() * deg;

    setHourDeg(hour + minute / 12);
    setMinuteDeg(minute + second / 12);
    setSecondDeg(second);
    setHour(day.getUTCHours());
  };

  useEffect(() => {
    if (+Hour >= 19 || +Hour < 6) {
      setLight(false);
    }
  }, [Hour]);

  useEffect(() => {
    setTime();
    const interval = setInterval(() => {
      setTime();
    }, 100);
  }, []);

  return (
    <ClockBackGround>
      <ClockPointer
        is_white={light}
        hourDeg={hourDeg}
        minuteDeg={minuteDeg}
        secondDeg={secondDeg}
      />
    </ClockBackGround>
  );
};

export default Clock;
