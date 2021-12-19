import React from "react";
import { Container, Jumbotron, Row } from "reactstrap";

export default function MemberComponent(props) {
  return (
    <Jumbotron style={{ margin: 10 }}>
      <div class="col-md-2 col-12">
        <img src={props.image} alt="" class="img-responsive img-member" />
      </div>
      <div class="col-md-9 col-12 offset-md-1">
        <h1 class="name mt-0">{props.name}</h1>
        <div role="doc-subtitle" class="mb-4">
          {props.office}
        </div>
        <p class="">{props.bio}</p>
      </div>
    </Jumbotron>
  );
}
