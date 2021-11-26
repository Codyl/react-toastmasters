import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Directory from "./DirectoryComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import CampsiteInfo from "./CampsiteInfoComponent";
import About from "./AboutComponent";
import Jumbotron from "reactstrap/lib/Jumbotron";
import Button from "reactstrap/lib/Button";
import Col from "reactstrap/lib/Col";
import Row from "reactstrap/lib/Row";
import EVENTS from "./EVENTS";

const mapStateToProps = (state) => {
  return {
    events: EVENTS,
    notify: state.notify,
  };
};

class Main extends Component {
  hideNotification = () => {};
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
                <p>Unfilled role: Evaluator #1, speaker #2</p>
                <Button>View agenda</Button>
              </Col>
            )}
            <Col>
              <Button onClick={this.hideNotification}>X</Button>
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
          <Route
            exact
            path="/join"
            render={() => <Directory campsites={this.props.campsites} />}
          />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/join" component={Contact} />
          <Route exact path="/about" component={Contact} />
          <Route exact path="/agenda" component={Contact} />
          <Route exact path="/profile/:username" component={Contact} />
          <Route exact path="/visit" component={Contact} />

          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
