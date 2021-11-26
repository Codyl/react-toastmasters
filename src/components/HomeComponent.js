import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Col } from "reactstrap";
import Button from "reactstrap/lib/Button";
import Jumbotron from "reactstrap/lib/Jumbotron";
import Row from "reactstrap/lib/Row";

import EVENTS from "./EVENTS";

function RenderCard({ item }) {
  return (
    <Card>
      <CardBody>
        <CardTitle className="title">Welcome to Midway Toastmasters</CardTitle>
        <CardText className="mx-5">
          <Row>
            <span>
              We're working toward excellence! Our room is bright. Our members
              are vibrant. Our meetings are organized and peppy. We learn a lot.
              We laugh a lot. Come see how Midway Toastmasters is unique. It's
              worth the drive.
            </span>
          </Row>
          <Row>
            <Col sm={5} md={3} lg={5} className="d-none d-sm-block">
              <img
                src="https://midwaytm.toastmastersclubs.org/imageuploads/1990654/Triple_Crown.jpg"
                width="100%"
                max-width="100px"
              />
            </Col>
            <Col>
              <span>
                It's the measure of every Toastmasters Club's success. We are
                President's Distinguished because our members achieve their
                goals. By joining Midway Toastmasters, you will enjoy the
                highest quality, productive meetings with great member
                enthusiasm.
              </span>
            </Col>
          </Row>
        </CardText>
        <Button color="primary">Sign up to be a toastmaster</Button>
      </CardBody>
    </Card>
  );
}

function Home(props) {
  return (
    <div className="row">
      <div className="homeImage py-4">
        <div className="col-lg-6 offset-lg-6 mt-4">
          <RenderCard item={props.campsite} />
        </div>
      </div>
      <Row className="mx-5 my-3">
        <Col className="col-12 col-md-4">
          <h2>Learn More</h2>
          <p>
            Learn about what makes Midway Toastmasters the best place to gain
            communication and leadership skills to advance your career.
          </p>
          <Button>Learn More</Button>
        </Col>

        <Col className="col-12 col-md-4">
          <h2>Visit Us</h2>
          <p>
            We would love to have you come to any of our weekly meetings and see
            what Midway Toastmasters is all about. You may attend in person or
            through zoom.
          </p>
          <Button>Visit us</Button>
        </Col>
        <Col className="col-12 col-md-4">
          <h2>Apply Now</h2>
          <p>
            Ready to join us? Fill out a member application online and prepare
            to take your communication skills to new levels with us.
          </p>
          <Button>Apply now</Button>
        </Col>
      </Row>
      <Row className="container-fluid">
        <Col sm={10} className="offset-1 my-2">
          <Jumbotron>
            <h3>Upcoming Events</h3>
            <ul style={{ listStyleType: "none" }}>
              {props.events.map((event) => {
                return (
                  <li key={event.id}>
                    <Row>
                      <Col sm={9}>
                        <h4>{event.date.toDateString()}</h4>
                        <h5>{event.date.toLocaleTimeString("en-US")}</h5>
                        <p>{event.name}</p>
                      </Col>
                      <Col>
                        <Button color="info">More Details</Button>
                      </Col>
                    </Row>
                    <hr />
                  </li>
                );
              })}
            </ul>
          </Jumbotron>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
