import React from "react";
import { connect } from "react-redux";

import EVENTS from "./EVENTS";
import { withRouter } from "react-router";
import EventItemComponent from "./EventItemComponent";
import CalendarComponent from "./CalendarComponent";
import { Button, Row, Col } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    events: state.events,
    notify: state.notify,
    users: state.users,
  };
};

function EventsComponent(props) {
  if (window.screen.width > 800)
    return (
      <div className="container">
        <br />
        <Row>
          <Col sm={10}>
            <h1>Events</h1>
          </Col>
          <Col>
            <Button color="dark">Create new event</Button>
          </Col>
        </Row>
        {<CalendarComponent props={props} />}
      </div>
    );
  else
    return (
      <>
        <h2>Upcoming Events</h2>
        <ul style={{ listStyleType: "none" }}>
          {props.events.map((event, limitTo) => {
            return limitTo < 20 && <EventItemComponent event={event} />;
          })}
        </ul>
      </>
    );
}

export default withRouter(connect(mapStateToProps)(EventsComponent));
