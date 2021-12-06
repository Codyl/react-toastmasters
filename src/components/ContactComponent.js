import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Col,
  Label,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(+val);
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phoneNum: "",
      email: "",
      agree: false,
      contactType: "By Phone",
      feedback: "",
      touched: {
        firstName: false,
        lastName: false,
        phoneNum: false,
        email: false,
      },
    };
  }

  handleSubmit = (values) => {
    console.log(`Current state is: ${JSON.stringify(values)}`);
    window.alert(`Current state is: ${JSON.stringify(values)}`);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Contact Us</BreadcrumbItem>
            </Breadcrumb>
            <h2>Contact Us</h2>
            <hr />
          </div>
        </div>

        <div className="row row-content align-items-center">
          <div className="col-sm-4">
            <h4>Meeting information</h4>
            <h5>Our Address</h5>
            <address>
              512 E. Stephens Street, Anne Hart Raymond Center, Room 120.
              <br />
              Midway, KY,
              <br />
              U.S.A.
            </address>
            <a href="https://zoom.us/j/455502545?pwd=cGJXUFVMK1RveFZkemZmYkxMb0x6dz09">
              Zoom meeting link
            </a>
          </div>
          <div className="col">
            <h4>Leadership Contacts</h4>
            <a role="button" className="btn btn-link" href="tel:+8599832709">
              Arlynn, DTM (Vice President Membership):{" "}
              <i className="fa fa-phone" />
              859-983-2709
            </a>
            <br />
            <a role="button" className="btn btn-link" href="tel:+8593519753">
              Rick Sebree DTM (President):
              <i className="fa fa-phone" />
              859-351-9753
            </a>
            <br />
            <a role="button" className="btn btn-link" href="tel:+5023190252">
              Steve Lanham DTM (Secretary): <i className="fa fa-phone" />
              502-319-0252
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto:1990654@toastmastersclubs.com">
              <i className="fa fa-envelope-o" /> 1990654@toastmastersclubs.com
            </a>
          </div>
        </div>

        <div className="row row-content">
          <div className="col-12">
            <h2>Send us your Feedback</h2>
            <hr />
          </div>
          <div className="col-md-10">
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="firstName" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".firstName"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    validators={{
                      required,
                      minLength: minLength(2),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".firstName"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                      minLength: "Must be at least 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="lastName" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".lastName"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    validators={{
                      required,
                      minLength: minLength(2),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".lastName"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                      minLength: "Must be at least 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label
                  htmlFor="phoneNum"
                  md={2}
                  onCopy={() =>
                    alert(
                      "This phone is copyrighted. Remove your copy immidiately!"
                    )
                  }>
                  Phone
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".phoneNum"
                    className="form-control"
                    id="phoneNum"
                    name="phoneNum"
                    placeholder="Phone number"
                    validators={{
                      required,
                      minLength: minLength(10),
                      maxLength: maxLength(15),
                      isNumber,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".phoneNum"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                      minLength: "Must be at least 10 characters",
                      maxLength: "Must be 15 characters or less",
                      isNumber: "Must be a number",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    validators={{
                      required,
                      validEmail,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                      validEmail: "Invalid email address",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 4, offset: 2 }}>
                  <div className="form-check">
                    <Label check>
                      <Control.checkbox
                        model=".agree"
                        className="form-check-input"
                        name="agree"
                      />{" "}
                      <strong>May we contact you?</strong>
                    </Label>
                  </div>
                </Col>
                <Col md={4}>
                  <Control.select
                    model=".contactType"
                    name="contactType"
                    value={this.state.contactType}
                    onChange={this.handleInputChange}>
                    <option>By Phone</option>
                    <option>By Email</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="feedback" md={2}>
                  Your Feedback
                </Label>
                <Col md={10}>
                  <Control.textarea
                    model=".feedback"
                    id="feedback"
                    name="feedback"
                    rows="12"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
