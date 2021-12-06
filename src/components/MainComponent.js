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
import NotificationComponent from "./NotificationComponent";

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
    
    return (
      <div>
        {<NotificationComponent notify={this.props.notify} events={this.props.events} />}
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/about" component={About} />
          <Route exact path="/agenda/:id" component={AgendaComponent} />
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
