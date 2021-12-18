import React, { useState } from "react";
import EVENTS from "./EVENTS";
import USERS from "./USERS";
import { BsQuestionCircle } from "react-icons/bs";
import { ImWarning } from "react-icons/im";
import {
  Col,
  Row,
  Button,
  Tooltip,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import { FadeTransform, Fade, Stagger } from "react-animation-components";

export default function EventComponent(props) {
  const getEventData = props.match.params.id;
  const event = EVENTS.filter((event) => event.id === +getEventData)[0];
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [showFilledRoles, setShowFilledRoles] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Container>
        <br />
        <Row>
          <Col>
            <h1>Event: {event.name} </h1>
            <h2>Theme: {event.theme}</h2>
            <div>{event.date.toLocaleDateString()}</div>
          </Col>
          <Col>
            <Link to={`/agenda/${event.id}`}>
              <Button color="dark">Go to Agenda</Button>
            </Link>{" "}
            <Button>Print</Button>{" "}
            <Button color="danger">Cancel this meeting</Button>{" "}
            <Button color="warning">Edit this meeting</Button>
          </Col>
        </Row>
        <p>Roles</p>
        <label htmlFor="showAll">
          <input
            type="checkbox"
            name="showAll"
            id="showAll"
            onClick={() => setShowFilledRoles(!showFilledRoles)}
          />{" "}
          Show filled roles
        </label>
        <Row style={{ flex: 1, justifyContent: "space-between" }}>
          <Col sm={2}>
            {EVENTS[event.id - 1] !== undefined ? (
              <Link to={`/event/${event.id - 1}`}>
                <Button>{"< "} Previous meeting</Button>
              </Link>
            ) : (
              ""
            )}
          </Col>
          <Col sm={2}>
            {EVENTS[event.id + 1] !== undefined ? (
              <Link to={`/event/${event.id + 1}`}>
                <Button> Next meeting{" >"}</Button>
              </Link>
            ) : (
              ""
            )}
          </Col>
        </Row>
        <section>
          {event.positions
            .filter((position) => showFilledRoles || position.userID === null)
            .map((position) => {
              return (
                <div>
                  <div class="media p-3 mt-5 jumbotron">
                    <img
                      src="../assets/images/charlie.jpg"
                      alt=""
                      class="img-responsive img-member order-sm-last d-none d-sm-block"
                    />
                    <div class="media-body px-3">
                      <div class="d-flex justify-content-between">
                        <h4 class="name d-inline">{position.position}</h4>
                        <Tooltip
                          toggle={() => setTooltipOpen(!tooltipOpen)}
                          isOpen={tooltipOpen}
                          target={`tooltip-Position-${position.position.replace(
                            / |\#/g,
                            "-"
                          )}`}
                          placement="top">
                          <p>Position details</p>
                        </Tooltip>
                        <BsQuestionCircle
                          id={`tooltip-Position-${position.position.replace(
                            / |\#/g,
                            "-"
                          )}`}
                        />
                      </div>
                      <div role="doc-subtitle" class="mb-4" width="50px">
                        {("Role filled by:" &&
                          USERS.filter((user) => user.id === position.userID)[0]
                            ?.name) || (
                          <p style={{ color: "orange" }}>
                            <ImWarning /> Position not yet filled.
                          </p>
                        )}
                      </div>
                      {USERS.filter((user) => user.id === position.userID)[0]
                        ?.name ? (
                        ""
                      ) : (
                        <Button
                          color="success"
                          onClick={() => setIsModalOpen(true)}>
                          Sign up
                        </Button>
                      )}
                      <Link to={`/role/${position.position}`}>
                        <Button>Role resources</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </section>
      </Container>
      <Modal isOpen={isModalOpen} toggle={() => setIsModalOpen(!isModalOpen)}>
        <ModalHeader toggle={() => setIsModalOpen(!isModalOpen)}>
          Role sign up
        </ModalHeader>
        <ModalBody></ModalBody>
      </Modal>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    events: state.events,
    users: state.users,
    positions: state.positions,
  };
};
const mapDispatchToProps = (dispatch) => {};
