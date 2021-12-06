import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardBody, CardTitle, Col } from "reactstrap";
import Button from "reactstrap/lib/Button";
import Jumbotron from "reactstrap/lib/Jumbotron";
import Row from "reactstrap/lib/Row";
import { FadeTransform, Fade, Stagger } from "react-animation-components";
import EVENTS from "./EVENTS";

function RenderCard({ item }) {
  return (
    <Card className="mx-5 mx-lg-1">
      <CardBody>
        <CardTitle className="title">Welcome to Midway Toastmasters</CardTitle>
        <CardText className="">
          <Row>
            <Col>
              <p>
                We're working toward excellence! Our room is bright. Our members
                are vibrant. Our meetings are organized and peppy. We learn a
                lot. We laugh a lot. Come see how Midway Toastmasters is unique.
                It's worth the drive.
              </p>
            </Col>
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
              <p>
                It's the measure of every Toastmasters Club's success. We are
                President's Distinguished because our members achieve their
                goals. By joining Midway Toastmasters, you will enjoy the
                highest quality, productive meetings with great member
                enthusiasm.
              </p>
            </Col>
          </Row>
        </CardText>
        <Link to="/join">
          <Button color="primary">Sign up to be a toastmaster</Button>
        </Link>
      </CardBody>
    </Card>
  );
}

function Home(props) {
  return (
    <div className="row">
      <div className="homeImage py-4">
        <div className="col-lg-6 offset-lg-5 mt-4">
          <Fade in>
            <RenderCard item={props.campsite} />
          </Fade>
        </div>
      </div>
      <Row className="mx-5 my-3">
        <Col className="col-12 col-md-4">
          <h2>Learn More</h2>
          <p>
            Learn about what makes Midway Toastmasters the best place to gain
            communication and leadership skills to advance your career.
          </p>

          <Link to="/about">
            <Button>Learn More</Button>
          </Link>
        </Col>

        <Col className="col-12 col-md-4">
          <h2>Visit Us</h2>
          <p>
            We would love to have you come to any of our weekly meetings and see
            what Midway Toastmasters is all about. You may attend in person or
            through zoom.
          </p>

          <Link to="/visit">
            <Button>Visit us</Button>
          </Link>
        </Col>
        <Col className="col-12 col-md-4">
          <h2>Apply Now</h2>
          <p>
            Ready to join us? Fill out a member application online and prepare
            to take your communication skills to new levels with us.
          </p>

          <Link to="/join">
            <Button>Apply now</Button>
          </Link>
        </Col>
      </Row>
      <Row className="container-fluid">
        <Col sm={10} className="offset-1 my-2">
          <Jumbotron>
            <h2>Upcoming Events</h2>
            <ul style={{ listStyleType: "none" }}>
              {props.events.map((event, limitTo) => {
                return limitTo < 3 &&(
                  <li key={event.id}>
                    <Row>
                      <Col sm={4}>
                        <h4>{event.date.toDateString()}</h4>
                        <h5>{event.date.toLocaleTimeString("en-US")}</h5>
                        <p>{event.name}</p>
                      </Col>
                      <Col sm={5}>
                        <p>
                          Open positions:
                          <br />
                          {event.positions
                            .filter((position) => position.userID === null)
                            .map((position) => (
                              <p>
                                {position.position} <Button>Sign up</Button>
                              </p>
                            ))}
                        </p>
                      </Col>
                      <Col>
                        <Link to={`./event/${event.id}`}>
                          <Button color="info">More Details</Button>
                        </Link>
                      </Col>
                    </Row>
                    <hr />
                  </li>
                );
              })}
            </ul>
            <Link to="/events">
              <Button>See all Events</Button>
            </Link>
          </Jumbotron>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
