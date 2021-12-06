import { Col, Row, Button, Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";

const NotificationComponent = ({ notify, events }) => {
  const todayEvent = events.filter((event) => {
    const eventDate = event.date.toLocaleDateString();
    const currentDate = new Date().toLocaleDateString();
    return eventDate == currentDate;
  })[0];

  let isOngoing = false;
  let todayEventOver = false;
  if (todayEvent) {
    const eventTime = todayEvent.date.toLocaleTimeString();
    const currentTime = new Date().toLocaleTimeString();

    const isSameMeridiem =
      currentTime.slice(currentTime.length - 2, currentTime.length) ==
      eventTime.slice(eventTime.length - 2, eventTime.length);
    const isSameHour =
      Date.now() < todayEvent.date.getTime() + 3600000 &&
      Date.now() > todayEvent.date.getTime();
    todayEventOver = Date.now() > todayEvent.date.getTime() + 3600000;
    isOngoing = isSameMeridiem && isSameHour;
  }

  return todayEvent && !todayEventOver ? (
    <Jumbotron className={`py-4 ${notify ? "d-block" : "d-none"}`}>
      <Row>
        {isOngoing ? (
          <Col sm={10}>
            <p>{todayEvent.name} is going on now!</p>

            <Button color="light">
              <i className="fa fa-video-camera fa-lg" /> Join meeting
            </Button>
          </Col>
        ) : (
          <Col sm={10}>
            <p>
              {todayEvent.name} is happening today at{" "}
              {todayEvent.date.toLocaleTimeString()}!
            </p>
            <p>
              Open Positions:
              {console.log(todayEvent.positions)}
              {todayEvent.positions
                .filter((position) => position.userID === null)
                .map((position) => (
                  <p>
                    {position.position} <Button color="success">Sign up</Button>
                  </p>
                ))}
            </p>
            <Link to={`./agenda/${todayEvent.id}`}>
              <Button>View agenda</Button>
              <Button color="light">
                <i className="fa fa-video-camera fa-lg" /> Join meeting
              </Button>
            </Link>
          </Col>
        )}
        <Col>
          <Button
            color="danger"
            onClick={() => this.props.dispatch({ type: "HIDE" })}>
            X
          </Button>
          {/* onClick={() => dispatch({ notify: false })} */}
        </Col>
      </Row>
    </Jumbotron>
  ) : (
    <div />
  );
};

export default NotificationComponent;
