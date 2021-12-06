import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Media,
} from "reactstrap";
import { Link } from "react-router-dom";
function RenderPartner({ partner }) {
  console.log(partner);
  if (partner) {
    return (
      <>
        <Media object src={partner.image} alt={partner.name} width="150" />
        <Media body className="ml-5 mb-4">
          <Media heading>{partner.name}</Media>
          {partner.description}
        </Media>
      </>
    );
  }
  return <div />;
}
function About(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>About Us</BreadcrumbItem>
          </Breadcrumb>
          <h2>About Us</h2>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-sm-6">
          <h3>Our Mission</h3>
          <p>
            We provide a supportive and positive learning experience in which
            members are empowered to develop communication and leadership
            skills, resulting in greater self-confidence and personal growth.
          </p>
        </div>
        <div className="col-sm-6">
          <Card>
            <CardHeader className="bg-primary text-white">
              <h3>By the numbers</h3>
            </CardHeader>
            <CardBody>
              <dl className="row">
                <dt className="col-6">Founded</dt>
                <dd className="col-6">February 3, 2016</dd>
                <dt className="col-6">No. of members</dt>
                <dd className="col-6">10</dd>
                <dt className="col-6">No. of awards in 2021</dt>
                <dd className="col-6">48</dd>
              </dl>
            </CardBody>
          </Card>
        </div>
      </div>
      <h3>What to expect as a new Midway toastmaster</h3>
      <p>
        As a toastmaster you can expect a group of toastmasters, people learning
        just like you, who are ready to support you in your goals. People can
        attend regardless of whether they are a toastmaster of another club or
        not a toastmaster. Your learning will be through{" "}
        <a href="https://www.toastmasters.org/pathways-overview">
          toastmasters learning paths
        </a> where you will choose a specific path such as dynamic leadership or presentation mastery and complete assignments.
       Every meeting we:
      </p>
      <ul>
        <li>Have prepared speakers on a variety of topics</li>
        <li>
          Have evaluators seek to provide positive feedback and constructive
          criticism
        </li>
        <li>Seek to share interest in our fellow toastmasters lives</li>
        <li>Seek to grow through a toastmasters position</li>
        <li>Have opportunities to earn awards and grow your speaking skills</li>
        <li>Keep our meetings to less than an hour and a half</li>
        <li>Always having an opporunity to speak and to get involved</li>
      </ul>
      <h3>What makes Midway Toastmasters different? </h3>
      <p></p>
    </div>
  );
}

export default About;
