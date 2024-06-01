import { useEffect, useState } from "react";
import { Timer, TimerWrapper } from "./style";

const Time = () => {
  const [date, setDate] = useState({ hour: "", minute: "", status: "" });

  const getSeconds = () => {
    setInterval(() => {
      const date = new Date();
      let hour = date.getHours();
      let minute = date.getMinutes();

      if (hour > 12) {
        hour = hour % 12;
        setDate((d) => {
          return { ...d, status: "PM" };
        });
      } else
        setDate((d) => {
          return { ...d, status: "AM" };
        });

      if (hour < 10) hour = "0" + hour;
      if (minute < 10) minute = "0" + minute;

      setDate((d) => {
        return { ...d, hour, minute };
      });
    }, 1000);
  };
  useEffect(() => {
    getSeconds();
  }, []);

  return (
    <TimerWrapper>
      <Timer status="ture">
        {date.hour}:{date.minute}
      </Timer>
      <Timer>{date.status}</Timer>
    </TimerWrapper>
  );
};

export default Time;
