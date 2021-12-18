import { Link, NavLink } from "react-router-dom";
import { Button, Row } from "reactstrap";
import Col from "reactstrap/lib/Col";
import styled from "styled-components";
import EVENTS from "./EVENTS";

const CalendarComponent = (props) => {
  const getDaysInMonth = (month, year, startDay = 0) => {
    return new Date(year, month, startDay);
  };
  const date = new Date(
    +props.props.match.params.year,
    +props.props.match.params.month,
    0
  );
  const filterEventsByMonth = EVENTS.filter(
    (event) => event.date.getMonth() === date.getMonth()
  );
  const DayHead = styled.th`
    margin: 0 auto;
    font-weight: 900;
    width: 100px;
    text-align: center;
  `;
  const selectedMonthLength = getDaysInMonth(
    date.getMonth() + 1,
    date.getFullYear()
  );
  const selectedMonthStart = getDaysInMonth(
    date.getMonth(),
    date.getFullYear(),
    1
  );
  let calendar = [];
  let calendarWeek = [];
  let monthStartDay = selectedMonthStart.toDateString().substr(0, 3);
  let monthStartNum;
  switch (monthStartDay) {
    case "Sun":
      monthStartNum = 0;
      break;
    case "Mon":
      monthStartNum = 1;
      break;
    case "Tue":
      monthStartNum = 2;
      break;
    case "Wed":
      monthStartNum = 3;
      break;
    case "Thu":
      monthStartNum = 4;
      break;
    case "Fri":
      monthStartNum = 5;
      break;
    case "Sat":
      monthStartNum = 6;
      break;
    default:
      monthStartNum = null;
  }
  const Day = styled.td`
    flex: 1 0 0%;
    font-weight: bold;
    height: 150px;
    border: 2px solid black;
  `;
  let weekNum = 0;
  let neededLength = selectedMonthLength.getDate() + monthStartNum;
  while (neededLength % 7 !== 0) {
    neededLength++;
  }
  for (let dayNum = 0; dayNum < neededLength; dayNum++) {
    let currDate = dayNum - monthStartNum + 1;
    if (dayNum % 7 === 0 && dayNum !== 0) {
      calendarWeek.push(
        <tr className="row" key={dayNum + " " + weekNum + "-tr"}>
          {calendar}
        </tr>
      );
      calendar = [];
      weekNum++;
    }
    if (
      dayNum < monthStartNum ||
      dayNum > selectedMonthLength.getDate() + monthStartNum - 1
    ) {
      calendar.push(<Day key={`${dayNum} ${weekNum}`}></Day>);
    } else {
      const todayEvents = filterEventsByMonth.filter(
        (event) => event.date.getDate() === currDate
      );
      if (todayEvents.length > 0) {
        const eventName = todayEvents[0].name;
        const eventTime = todayEvents[0].date.toLocaleTimeString();
        calendar.push(
          <Day key={`${dayNum} ${weekNum}`}>
            {currDate}
            <Link to={`/event/${todayEvents[0].id}`}>
              <Button>
                <h4>{eventName}</h4>
                <p>{eventTime}</p>
              </Button>
            </Link>
          </Day>
        );
      } else {
        calendar.push(<Day key={`${dayNum} ${weekNum}`}>{currDate}</Day>);
      }
    }

    //Now that we are at the end append the rest
    if (dayNum === neededLength - 1) {
      calendarWeek.push(
        <tr className="row" key={dayNum + " " + weekNum + "-tr"}>
          {calendar}
        </tr>
      );
    }
  }
  console.log(date.getFullYear());
  return (
    <>
      <h3>
        {date.toLocaleString("en-US", { month: "long" })} {date.getFullYear()}
      </h3>
      <Row style={{ flex: 1, justifyContent: "space-between" }}>
        <Col sm={2}>
          <Link to={`/events/${+date.getFullYear()}/${date.getMonth()}`}>
            <Button>{"< "} Previous month</Button>
          </Link>
        </Col>
        <Col sm={2}>
          <Link to={`/events/${+date.getFullYear()}/${date.getMonth() + 2}`}>
            <Button> Next month{" >"}</Button>
          </Link>
        </Col>
      </Row>
      <table className="container">
        <thead>
          <tr className="row">
            <DayHead key={"a"}>Sunday</DayHead>
            <DayHead key={"b"}>Monday</DayHead>
            <DayHead key={"c"}>Tuesday</DayHead>
            <DayHead key={"d"}>Wednesday</DayHead>
            <DayHead key={"e"}>Thursday</DayHead>
            <DayHead key={"f"}>Friday</DayHead>
            <DayHead key={"g"}>Saturday</DayHead>
          </tr>
        </thead>
        <tbody>{calendarWeek}</tbody>
      </table>
    </>
  );
};
export default CalendarComponent;
