import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import { Button, Row, Col } from "reactstrap";
export default function AgendaComponent() {
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
            <p>Presented by {props.toastmaster}</p>
          </Col>
          <Col md>{props?.image}</Col>
        </Row>
      </>
    );
  };
  return (
    <>
      <Container>
        <h1>Agenda</h1>
        <h2>Theme: TBD</h2>
        <div>date</div>
        <TopicTitle>Introduction</TopicTitle>
        <AgendaItem
          title="Welcome"
          timeframe="6:00-6:01pm"
          details="Call meeting to order. Welcome guests. Introduce Toastmaster of the Day."
          toastmaster="steve"
        />
        <AgendaItem
          title="Opening Remarks"
          timeframe="6:01-6:04pm"
          details="Make brief opening remarks. Ask someone to read TM club mission statement. Call for WORD OF THE DAY. Explain roles, if guests present. (Before meeting, fill any open meeting roles.) Call for 2-minute break for speaker-evaluator discussions. Introduce speakers."
          toastmaster="steve"
        />
        <AgendaItem
          title="Word of the day"
          timeframe="6:04-6:13pm"
          details="Review HARDR method (Humor, Avoid, Redirect, Direct, Reverse). Call on 2-4 members. Ask if all speakers in time. Recap. Call for vote. Return meeting to Toastmaster of the Day."
          toastmaster="Thomas"
        />
      </Container>
      <Container>
        <TopicTitle>Speeches</TopicTitle>
        <AgendaItem
          title="The Dynamics of the family"
          timeframe="6:04-6:13pm"
          details="Dynamic Leadership - Ice breaker"
          toastmaster="Thomas"
        />
        <AgendaItem
          title="The Dynamics of the family"
          timeframe="6:04-6:13pm"
          details="Dynamic Leadership - Ice breaker"
          toastmaster="Thomas"
        />
        <AgendaItem
          title="The Dynamics of the family"
          timeframe="6:04-6:13pm"
          details="Dynamic Leadership - Ice breaker"
          toastmaster="Thomas"
        />
        <AgendaItem
          title="Vote"
          timeframe="6:04-6:13pm"
          details="Ask if all speakers in time and call for vote. Call for JOKE OF THE DAY. Introduce Table Topics Master."
          toastmaster="Thomas"
        />
      </Container>
      <Container>
        <TopicTitle>Table topics</TopicTitle>
        <AgendaItem
          title="theme"
          timeframe="6:04-6:13pm"
          details="Review HARDR method (Humor, Avoid, Redirect, Direct, Reverse). Call on 2-4 members. Ask if all speakers in time. Recap. Call for vote. Return meeting to Toastmaster of the Day."
          toastmaster="Thomas"
        />
        <AgendaItem
          title="Joke of the day"
          timeframe="6:04-6:13pm"
          details="Review HARDR method (Humor, Avoid, Redirect, Direct, Reverse). Call on 2-4 members. Ask if all speakers in time. Recap. Call for vote. Return meeting to Toastmaster of the Day."
          toastmaster="Thomas"
        />
      </Container>
      <Container>
        <TopicTitle>Evaluations</TopicTitle>
        <AgendaItem
          title="Evaluation of thomas speech"
          timeframe="6:04-6:13pm"
          details="Review HARDR method (Humor, Avoid, Redirect, Direct, Reverse). Call on 2-4 members. Ask if all speakers in time. Recap. Call for vote. Return meeting to Toastmaster of the Day."
          toastmaster="Thomas"
        />
        <AgendaItem
          title="Evaluation of thomas speech"
          timeframe="6:04-6:13pm"
          details="Review HARDR method (Humor, Avoid, Redirect, Direct, Reverse). Call on 2-4 members. Ask if all speakers in time. Recap. Call for vote. Return meeting to Toastmaster of the Day."
          toastmaster="Thomas"
        />
        <AgendaItem
          title="Evaluation of thomas speech"
          timeframe="6:04-6:13pm"
          details="Review HARDR method (Humor, Avoid, Redirect, Direct, Reverse). Call on 2-4 members. Ask if all speakers in time. Recap. Call for vote. Return meeting to Toastmaster of the Day."
          toastmaster="Thomas"
        />
        <AgendaItem
          title="General Evaluation"
          timeframe="6:04-6:13pm"
          details="Review HARDR method (Humor, Avoid, Redirect, Direct, Reverse). Call on 2-4 members. Ask if all speakers in time. Recap. Call for vote. Return meeting to Toastmaster of the Day."
          toastmaster="Thomas"
        />
        <AgendaItem
          title="Timer"
          timeframe="6:04-6:13pm"
          details="Review HARDR method (Humor, Avoid, Redirect, Direct, Reverse). Call on 2-4 members. Ask if all speakers in time. Recap. Call for vote. Return meeting to Toastmaster of the Day."
          toastmaster="Thomas"
        />
        <AgendaItem
          title="Ah-counter/Grammarian"
          timeframe="6:04-6:13pm"
          details="Review HARDR method (Humor, Avoid, Redirect, Direct, Reverse). Call on 2-4 members. Ask if all speakers in time. Recap. Call for vote. Return meeting to Toastmaster of the Day."
          toastmaster="Thomas"
        />
      </Container>
      <Container>
        <TopicTitle>Conclusion</TopicTitle>
        <AgendaItem
          title="Presentation of awards"
          timeframe="6:04-6:13pm"
          details="Review HARDR method (Humor, Avoid, Redirect, Direct, Reverse). Call on 2-4 members. Ask if all speakers in time. Recap. Call for vote. Return meeting to Toastmaster of the Day."
          toastmaster="Thomas"
        />
        <AgendaItem
          title="Closing comments"
          timeframe="6:04-6:13pm"
          details="Review HARDR method (Humor, Avoid, Redirect, Direct, Reverse). Call on 2-4 members. Ask if all speakers in time. Recap. Call for vote. Return meeting to Toastmaster of the Day."
          toastmaster="Thomas"
        />
        <AgendaItem
          title="Thought of the day"
          timeframe="6:04-6:13pm"
          details="Review HARDR method (Humor, Avoid, Redirect, Direct, Reverse). Call on 2-4 members. Ask if all speakers in time. Recap. Call for vote. Return meeting to Toastmaster of the Day."
          toastmaster="Thomas"
        />
      </Container>
    </>
  );
}
