import React, { useState, useEffect } from "react";

/* Setting the state of the timer. Start btn to star the countdown. */
export default function Pomodoro() {
  const [isActive, setIsActive] = useState(false);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);

  useEffect(() => {
    if (isActive) {
      let interval = setInterval(() => {
        clearInterval(interval);

        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            let minutes = displayMessage ? 24 : 4;
            let seconds = 59;

            setSeconds(seconds);
            setMinutes(minutes);
            setDisplayMessage(!displayMessage);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      return;
    }
  }, [minutes, seconds, displayMessage, isActive]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="pomodoro">
      <div className="message">
        {displayMessage && <div>Break time! New session starts in:</div>}
        {/* <button type="button" className="btnAll">
          Run
        </button> */}
      </div>
      <div className="timer">
        {timerMinutes}:{timerSeconds}
        <button
          type="button"
          className="btnAll"
          onClick={() => setIsActive(true)}
        >
          Start
        </button>
        <button
          type="button"
          className="btnAll"
          onClick={() => setIsActive(false)}
        >
          Stop
        </button>
      </div>
    </div>
  );
}
