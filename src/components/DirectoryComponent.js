import React from "react";
import { Container } from "reactstrap";
import MemberComponent from "./MemberComponent";
import USERS from "./USERS";

export default function DirectoryComponent() {
  const officersComponents = USERS.filter((user) => user.office).map((user) => (
    <MemberComponent
      image={user?.photoUrl}
      name={user?.name}
      office={user?.office}
      bio={user?.bio}
    />
  ));
  const membersComponents = USERS.filter((user) => !user.office).map((user) => (
    <MemberComponent
      image={user?.photoUrl}
      name={user?.name}
      office={user?.office}
      bio={user?.bio}
    />
  ));
  return (
    <Container>
      <h1>Officers</h1>
      {officersComponents}
      <h1>Members</h1>
      {membersComponents}
    </Container>
  );
}
