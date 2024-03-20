'use client'
import React from "react";
import { useEffect, useState } from "react";

import style from "./timer.module.scss";

export const Timer = () =>{
    const [time, setTime] = useState({
        hours: 60,
        minutes: 0,
        seconds: 0,
      });
      useEffect(() => {
        const interval = setInterval(() => {
          setTime((prevTime) => {
            if (
              prevTime.hours === 0 &&
              prevTime.minutes === 0 &&
              prevTime.seconds === 0
            ) {
              clearInterval(interval);
              return prevTime;
            }
    
            let updatedHours = prevTime.hours;
            let updatedMinutes = prevTime.minutes;
            let updatedSeconds = prevTime.seconds;
    
            if (updatedSeconds === 0) {
              if (updatedMinutes === 0) {
                updatedHours -= 1;
                updatedMinutes = 59;
              } else {
                updatedMinutes -= 1;
              }
              updatedSeconds = 59;
            } else {
              updatedSeconds -= 1;
            }
    
            return {
              hours: updatedHours,
              minutes: updatedMinutes,
              seconds: updatedSeconds,
            };
          });
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);
      return (
        <div className={style.timer}>
          <p className={style.txt}>Auction ends in:</p>
          <p className={style.txt2}>
            {time.hours} : {time.minutes} : {time.seconds}
          </p>
          <div className={style.wrapper}>
            <p className={style.wrapper__txt}>Hours</p>
            <p className={style.wrapper__txt}>Minutes</p>
            <p className={style.wrapper__txt}>Seconds</p>
          </div>
        </div>
      );
}