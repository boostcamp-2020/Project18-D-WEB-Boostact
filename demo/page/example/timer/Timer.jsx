import Boostact from "../../../../src/boostact/Boostact";
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
  let beforeOrAfter = "PM";
  Boostact.useEffect(() => {
    const intervalId = setInterval(() => {
      const timer = new Date();
      setSeconds(numPad(timer.getSeconds()));
      setMinutes(numPad(timer.getMinutes()));
      setHours(numPad(timer.getHours()));
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [seconds, minutes, hours]);
  return (
    <div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          fontSize: "120px",
        }}
      >
        <div
          style={{
            width: "400px",
            borderBottom: "50px solid black",
            borderRight: "50px solid white",
            borderLeft: "50px solid white",
          }}
        ></div>
        <div
          id="bigBox"
          style={{
            display: "flex",
            width: "500px",
            height: "200px",
          }}
        >
          <div
            id="timesBox"
            style={{
              border: "1px solid black",
              borderBottom: "5px solid black",
              borderBottomLeftRadius: "10px",
              display: "flex",
              width: "150px",
              height: "200px",
            }}
          >
            <div>
              <span>{hours}</span>
            </div>
          </div>
          <div class="divider" style={{ width: "25px", border: "3px solid black", height: "200px", borderBottom: "3px solid black" }}>
            :
          </div>
          <div
            id="minutesBox"
            style={{
              border: "1px solid black",
              borderBottom: "5px solid black",
              display: "flex",
              width: "150px",
              height: "200px",
            }}
          >
            <div>
              <span>{minutes}</span>
            </div>
          </div>
          <div class="divider" style={{ width: "25px", border: "3px solid black", height: "200px", borderBottom: "3px solid black" }}>
            :
          </div>
          <div
            id="secondsBox"
            style={{
              border: "1px solid black",
              borderBottom: "5px solid black",
              borderBottomRightRadius: "10px",
              display: "flex",
              width: "150px",
              height: "200px",
            }}
          >
            <div>
              <p style={{ margin: "0px" }}>{seconds}</p>
              <p style={{ fontWeight: "800", fontSize: "25px", margin: "0px", paddingLeft: "90px" }}> {beforeOrAfter}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
