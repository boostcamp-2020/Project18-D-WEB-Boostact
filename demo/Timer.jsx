import Boostact from "../src/boostact/Boostact";
import Route from "../src/boostact/Route";
import Home from "./Home";
import About from "./About";
import Todo from "./todoList/todoTemplate";
import Search from "./searchpage/main";
/** @jsx Boostact.createElement */

const numPad = (num) => {
  if (typeof num === "number" && num < 10) {
    num = "0" + num;
  }
  return num;
};

const Timer = () => {
  const startTime = new Date();

  let [hours, setHours] = Boostact.useState(startTime.getHours());
  let [minutes, setMinutes] = Boostact.useState(startTime.getMinutes());
  let [seconds, setSeconds] = Boostact.useState(startTime.getSeconds());
  let beforeOrAfter = "PM";

  const timer = new Date();
  setSeconds(numPad(timer.getSeconds()));
  setMinutes(numPad(timer.getMinutes()));
  setHours(numPad(timer.getHours()));

  const checkTimer = () => {
    console.log("타이머가 시작됩니다.");
    return () => {
      console.log("타이머가 멈춰버렸습니다!?");
    };
  };

  //  Boostact.useEffect(checkTimer, [seconds]);

  return (
    <div>
      <div id="title">타이틀</div>
      <ul>
        <li>
          <Route.Link to="/home">
            <span>Home</span>
          </Route.Link>
        </li>
        <li>
          <Route.Link to="/about">
            <span>About</span>
          </Route.Link>
        </li>
        <li>
          <Route.Link to="/Timer">
            <span>Timer</span>
          </Route.Link>
        </li>
        <li>
          <Route.Link to="/todo">
            <span>Todo</span>
          </Route.Link>
        </li>
        <li>
          <Route.Link to="/search">
            <span>search</span>
          </Route.Link>
        </li>
      </ul>
      <hr />
      <div id="ROUTING">
        <Route.Route path="/home" component={Home}></Route.Route>
        <Route.Route path="/about" component={About}></Route.Route>
        <Route.Route path="/timer" component={Timer}></Route.Route>
        <Route.Route path="/todo" component={Todo}></Route.Route>
        <Route.Route path="/search" component={Search}></Route.Route>
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
      </div>
    </div>
  );
};

export default Timer;
