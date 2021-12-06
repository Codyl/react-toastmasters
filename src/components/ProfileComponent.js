import { Component } from "react";
import { Control, Errors, LocalForm } from "react-redux-form";
import Col from "reactstrap/lib/Col";
import Container from "reactstrap/lib/Container";
import Form from "reactstrap/lib/Form";
import FormGroup from "reactstrap/lib/FormGroup";
import Row from "reactstrap/lib/Row";

const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const required = (val) => val && val.length;
const validPhone = (val) => /[0-9]{3}-[0-9]{3}-[0-9]{4}/.test(val);
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phoneNum: "",
      email: "",
      bio: "",
      touched: {
        firstName: false,
        lastName: false,
        phoneNum: false,
        email: false,
        bio: false,
      },
    };
  }
  handleSubmit = (values) => {
    console.log(`Current state is: ${JSON.stringify(values)}`);
    window.alert(`Current state is: ${JSON.stringify(values)}`);
  };
  handleInputChange = (event) => {};
  render() {
    console.log(this.props);
    // const user = this.props.users.filter(
    //   (user) => user.name === this.props.match.params.username
    // )[0];
    // console.log(user);
    return (
      <Container>
        <h1>Profile</h1>
        <h2>Cody Lillywhite</h2>
        <Row>
          <Col sm={4}>
            <img
              src="./assets/images/self.jpg"
              alt=""
              style={{ backgroundColor: "grey" }}
              width="200px"
              height="200px"
              className="mx-auto d-block"
            />
            <input type="file" accept="image/*" />
          </Col>
          <Col sm={8}>
            <LocalForm
              className="px-5"
              onSubmit={(values) => this.handleSubmit(values)}>
              <FormGroup>
                <Row>
                  <Col sm={6}>
                    <label htmlFor="firstName">First Name</label>
                    <Control.text
                      className="form-control"
                      id="firstName"
                      placeholder="Enter first name"
                      model=".firstName"
                      name="firstName"
                      value={this.state.firstName}
                      onChange={this.handleInputChange}
                      validators={{
                        required,
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".firstName"
                      show="touched"
                      component="div"
                      messages={{
                        required: "Required",
                      }}
                    />
                  </Col>
                  <Col sm={6}>
                    <label htmlFor="lastName">Last Name</label>
                    <Control.text
                      className="form-control"
                      id="lastName"
                      placeholder="Enter first name"
                      model=".lastName"
                      validators={{
                        required,
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".lastName"
                      show="touched"
                      component="div"
                      messages={{
                        required: "Required",
                      }}
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <label htmlFor="email">Email address</label>
                <Control.text
                  className="form-control"
                  id="email"
                  name="email"
                  model=".email"
                  placeholder="Enter email"
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
                    validEmail: "Invalid Email",
                  }}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="phone">Telephone</label>
                <Control.text
                  type="tel"
                  name="phone"
                  className="form-control"
                  id="phone"
                  placeholder="Telephone"
                  model=".phone"
                  validators={{
                    validPhone,
                    required,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".phone"
                  show="touched"
                  component="div"
                  messages={{
                    required: "Required",
                    validPhone: "Format ###-###-#### expected",
                  }}
                />
              </FormGroup>
              <label htmlFor="bio">Bio</label>
              <Control.textarea
                className="form-control"
                model=".bio"
                name="bio"
                id=""
                cols="30"
                rows="10"
                placeholder="Write your story"></Control.textarea>
              <button type="submit" className="btn btn-success my-4">
                Submit
              </button>
            </LocalForm>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              Assigned mentor: 
              <a role="button" className="btn btn-link" href="tel:+8599832709">
                Arlynn, DTM (Vice President Membership):{" "}
                <i className="fa fa-phone" />
                859-983-2709
              </a>
            </div>
          </Col>
        </Row>
        <Row>You are up to date on your payments!</Row>
      </Container>
    );
  }
}
export default Profile;
