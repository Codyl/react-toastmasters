import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import { Button, Row, Col } from "reactstrap";
import EVENTS from "./EVENTS";
import USERS from "./USERS";
import POSITIONS from "./POSITIONS";
import { Link } from "react-router-dom";
export default function AgendaComponent(props) {
  const getEventData = props.match.params.id;
  const event = EVENTS.filter((event) => event.id === +getEventData)[0];
  const findPosition = (position) =>
    USERS.filter(
      (user) =>
        user.id ===
        event.positions.filter(
          (positionObj) => positionObj.position === position
        )[0]?.userID
    )[0]?.name;
  const wjt = findPosition("wjt");
  const toastmaster = findPosition("Toastmaster");
  const ttm = findPosition("Table Topics Master");
  const gEvaluator = findPosition("General Evaluator");
  const timer = findPosition("Timer");
  const ahCounter = findPosition("Ah-counter");
  const findPositions = (positionSharedName) => {
    let sharedPositionGroup = [];
    for (let speaker of event.positions.filter((positionObj) =>
      positionObj.position.includes(positionSharedName)
    )) {
      console.log(speaker.position);
      const speakerName = findPosition(speaker.position);
      speaker.speakerName = speakerName;
      sharedPositionGroup.push(speaker);
    }
    return sharedPositionGroup;
  };
  let speakers = findPositions("Speaker");
  let evaluators = findPositions("Evaluator ");

  const TopicTitle = styled.h3`
    background-color: gray;
  `;
  const AgendaItem = (props) => {
    return (
      <>
        <h4>{props.title}</h4>
        <Row>
          <Col>{props.timeframe}</Col>
          <Col>
            <p>{props.details}</p>
            <p>Presented by {props.user}</p>
          </Col>
          <Col md>{props?.image}</Col>
        </Row>
      </>
    );
  };
  const speakerJSX = speakers.map((speaker) => (
    <AgendaItem
      title={speaker.speechDetails.name}
      timeframe="6:04-6:13pm"
      details={`${speaker.speechDetails.path} - ${speakers[0].speechDetails.course}`}
      user={speaker.speakerName || "TBD"}
    />
  ));
  const evaluatorJSX = evaluators.map((evaluator, i) => (
    <AgendaItem
      title={`Evaluation of ${speakers[i].speakerName} speech`}
      timeframe="6:04-6:13pm"
      details="Review HARDR method (Humor, Avoid, Redirect, Direct, Reverse). Call on 2-4 members. Ask if all speakers in time. Recap. Call for vote. Return meeting to Toastmaster of the Day."
      user={evaluator.speakerName || "TBD"}
    />
  ));
  return (
    <>
      <Container>
        <br />
        <Row>
          <Col sm={6}>
            <h1>Agenda</h1>
            <h2>Theme: {event.theme}</h2>
            <div>{event.date.toDateString()}</div>
          </Col>
          <Col>
            <Link to={`/event/${event.id}`}>
              <Button color="dark">Go to roles</Button>
            </Link>
          </Col>
        </Row>
        <TopicTitle>Introduction</TopicTitle>
        <AgendaItem
          title="Welcome"
          timeframe="6:00-6:01pm"
          details="Call meeting to order. Welcome guests. Introduce Toastmaster of the Day."
          user={toastmaster || "TBD"}
        />
        <AgendaItem
          title="Opening Remarks"
          timeframe="6:01-6:04pm"
          details="Make brief opening remarks. Ask someone to read TM club mission statement. Call for WORD OF THE DAY. Explain roles, if guests present. (Before meeting, fill any open meeting roles.) Call for 2-minute break for speaker-evaluator discussions. Introduce speakers."
          user={toastmaster || "TBD"}
        />
        <AgendaItem
          title="Word of the day"
          timeframe="6:04-6:13pm"
          details="Share word of the day definition and use it in a sentence. Post the word, definition, and sentence in the meeting chat(if online)"
          user={wjt || "TBD"}
        />
      </Container>
      <Container>
        <TopicTitle>Speeches</TopicTitle>
        {speakerJSX}

        <AgendaItem
          title="Vote"
          timeframe="6:04-6:13pm"
          details="Ask if all speakers in time and call for vote. Call for JOKE OF THE DAY. Introduce Table Topics Master."
          user={toastmaster || "TBD"}
        />
      </Container>
      <Container>
        <TopicTitle>Table topics</TopicTitle>
        <AgendaItem
          title="Table Topics Discussion"
          timeframe="6:04-6:13pm"
          details="Ask several members to answer impromptu questions based on the theme. Review what they said."
          user={ttm || "TBD"}
        />
        <AgendaItem
          title="Joke of the day"
          timeframe="6:04-6:13pm"
          details="Share the joke of the day."
          user={wjt || "TBD"}
        />
      </Container>
      <Container>
        <TopicTitle>Evaluations</TopicTitle>
        {evaluatorJSX}
        <AgendaItem
          title="General Evaluation"
          timeframe="6:04-6:13pm"
          details="Review HARDR method (Humor, Avoid, Redirect, Direct, Reverse). Call on 2-4 members. Ask if all speakers in time. Recap. Call for vote. Return meeting to Toastmaster of the Day."
          user={gEvaluator || "TBD"}
        />
        <AgendaItem
          title="Timer"
          timeframe="6:04-6:13pm"
          details="Record and report on the time taken for each speech and evaluation"
          user={timer || "TBD"}
        />
        <AgendaItem
          title="Ah-counter/Grammarian"
          timeframe="6:04-6:13pm"
          details="Record and report on filler words and misuse of grammar"
          user={ahCounter || "TBD"}
        />
      </Container>
      <Container>
        <TopicTitle>Conclusion</TopicTitle>
        <AgendaItem
          title="Presentation of awards"
          timeframe="6:04-6:13pm"
          details="Present the awards for those who have completed a course or path."
          user={toastmaster || "TBD"}
        />
        <AgendaItem
          title="Closing comments"
          timeframe="6:04-6:13pm"
          details="Share remarks about the meeting."
          user={toastmaster || "TBD"}
        />
        <AgendaItem
          title="Thought of the day"
          timeframe="6:04-6:13pm"
          details="Share a thought of the day from any resource."
          user={wjt || "TBD"}
        />
      </Container>
    </>
  );
}
