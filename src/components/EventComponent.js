import React, { useState } from 'react'
import Tooltip from 'reactstrap/lib/Tooltip';
import EVENTS from './EVENTS';
import USERS from './USERS';
import { BsQuestionCircle } from "react-icons/bs";
import { Button, Container } from 'reactstrap';
export default function EventComponent(props) {
  const getEventData = props.match.params.id;
  const event = EVENTS.filter(event => event.id === +getEventData)[0];
  const [tooltipOpen, setTooltipOpen] = useState(false);
  console.log(event)
  return (
    <Container>
      <h1>Event: {event.name} </h1>
      <div>{event.date.toLocaleDateString()}</div>
      <section>
        {event.positions.map(position => {
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
                    <h3 class="name d-inline">{position.position}</h3>
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
                    {
                      USERS.filter((user) => user.id === position.userID)[0]
                        ?.name
                    }
                  </div>
                  {USERS.filter((user) => user.id === position.userID)[0]
                    ?.name ? (
                    ""
                  ) : (
                    <Button>Sign up</Button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    events: state.events,
    users: state.users,
    positions: state.positions,
    
  };
};
const mapDispatchToProps = dispatch => {

};