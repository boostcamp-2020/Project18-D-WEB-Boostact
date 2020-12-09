import Boostact from "../../../../src/boostact/Boostact";
import classes from "./style";

/** @jsx Boostact.createElement */

const numPad = (num) => {
  if (typeof num === "number" && num < 10) {
    num = "0" + num;
  }
  return num;
};

const Timer = () => {
  const startTime = new Date();

  const [hours, setHours] = Boostact.useState(numPad(startTime.getHours()));
  const [minutes, setMinutes] = Boostact.useState(numPad(startTime.getMinutes()));
  const [seconds, setSeconds] = Boostact.useState(numPad(startTime.getSeconds()));

  Boostact.useEffect(() => {
    const intervalId = setInterval(() => {
      const timer = new Date();
      setSeconds(numPad(timer.getSeconds()));
      setMinutes(numPad(timer.getMinutes()));
      setHours(numPad(timer.getHours()));
    }, 1);

    return () => {
      clearInterval(intervalId);
    };
  }, [seconds, minutes, hours]);

  return (
    <div>
      <div className={classes.timer}>
        <div className={classes.topOfTimer} />
        <div className={classes.bigBox}>
          <div className={classes.timesBox}>
            <div>
              <span>{hours}</span>
            </div>
          </div>
          <div className={classes.divider}>:</div>
          <div className={classes.minutesBox}>
            <div>
              <span>{minutes}</span>
            </div>
          </div>
          <div className={classes.divider}>:</div>
          <div className={classes.secondsBox}>
            <div>
              <p className={classes.noneMarginP}>{seconds}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
