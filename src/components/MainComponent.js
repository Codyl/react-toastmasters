import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import Jumbotron from "reactstrap/lib/Jumbotron";
import Button from "reactstrap/lib/Button";
import Col from "reactstrap/lib/Col";
import Row from "reactstrap/lib/Row";
import EVENTS from "./EVENTS";
import About from "./AboutComponent";
import Profile from "./ProfileComponent";
import Join from "./JoinComponent";
import EventsComponent from "./EventsComponent";
import EventComponent from "./EventComponent";
import AgendaComponent from "./AgendaComponent";

const mapStateToProps = (state) => {
  return {
    events: state.events,
    notify: state.notify,
    users: state.users,
  };
};

class Main extends Component {
  render() {
    const HomePage = () => {
      return <Home events={this.props.events} />;
    };
    const Notification = ({ notify, events }) => {
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
                        {position.position} <Button>Sign up</Button>
                      </p>
                    ))}
                </p>
                <Link to={`./event/${todayEvent.id}`}>
                  <Button>View agenda</Button>
                  <Button color="light">
                    <i className="fa fa-video-camera fa-lg" /> Join meeting
                  </Button>
                </Link>
              </Col>
            )}
            <Col>
              <Button onClick={() => this.props.dispatch({ type: "HIDE" })}>
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
    return (
      <div>
        {<Notification notify={this.props.notify} events={this.props.events} />}
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/about" component={About} />
          <Route exact path="/agenda" component={AgendaComponent} />
          <Route exact path="/events" component={EventsComponent} />
          <Route exact path="/event/:id" component={EventComponent} />
          <Route
            exact
            path="/profile/:username"
            render={() => <Profile users={this.props.users} />}
          />
          <Route exact path="/visit" component={Contact} />

          <Redirect to="/home" />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
