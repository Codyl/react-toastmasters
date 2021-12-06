import React, { Component } from "react";
import { Col, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";

export default class EventItemComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li key={this.props.event.id}>
        <Row>
          <Col sm={4}>
            <h4>{this.props.event.date.toDateString()}</h4>
            <h5>{this.props.event.date.toLocaleTimeString("en-US")}</h5>
            <p>{this.props.event.name}</p>
          </Col>
          <Col sm={5}>
            <p>
              <details>
                <summary>
                  Open positions:
                  {
                    this.props.event.positions.filter(
                      (position) => position.userID === null
                    ).length
                  }
                </summary>

                {this.props.event.positions
                  .filter((position) => position.userID === null)
                  .map((position) => (
                    <p>
                      {position.position}{" "}
                      <Button color="success">Sign up</Button>
                    </p>
                  ))}
              </details>
            </p>
          </Col>
          <Col>
            <Link to={`./event/${this.props.event.id}`}>
              <Button color="info">More Details</Button>
            </Link>
          </Col>
        </Row>
        <hr />
      </li>
    );
  }
}
