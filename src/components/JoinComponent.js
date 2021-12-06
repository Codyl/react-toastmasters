import React, { Component } from "react";
import { LocalForm } from "react-redux-form";
import Button from "reactstrap/lib/Button";
import Container from "reactstrap/lib/Container";
import FormGroup from "reactstrap/lib/FormGroup";
import Row from "reactstrap/lib/Row";

export default class Join extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      completed: false,
    };
  }
  incrementStep = () => {
    console.log(this.step);
    this.setState((state) => {
      return {
        step: +state.step + 1,
      };
    });
  };
  componentWillUnmount() {
    if (this.state.step != 0 && this.state.step < 6)
      window.confirm(
        "You will lose you progress if you leave this page. Continue?"
      );
  }
  render() {
    const Step0 = () => (
      <>
        <p>
          Congratulations on you decision to become a toastmaster at midway!
          Please hit next step to continue through the application process.
        </p>
      </>
    );
    const Step1 = () => (
      <>
        <h2>Step 1: Agreement</h2>
        <Row>
          <input type="email" placeholder="email" required />
        </Row>
        <Row>
          <span>
            <input type="checkbox" required /> By submitting this online
            membership application, you agree to treat it as the legally binding
            equivalent of the standard Toastmasters International membership
            application, and you will be prompted to agree to all the same terms
            and conditions.
          </span>
        </Row>
      </>
    );
    const Step2 = () => (
      <>
        <h2>Step 2: Applicant Information</h2>
        <h3>Full name</h3>
        <FormGroup>
          <div>
            <label for="firstName">First name</label>
            <input type="text" id="firstName" name="name" required />
          </div>
          <div>
            <label for="lastName">Last name</label>
            <input type="text" id="LastName" name="name" required />
          </div>
          <div>
            <label for="middleName">Middle Initial</label>
            <input type="text" id="MiddleName" name="name" />
          </div>
        </FormGroup>
        <h3>Gender</h3>
        <FormGroup>
          <div>
            <input type="radio" id="gender1" name="gender" value="male" />
            <label for="gender1">Male</label>
          </div>
          <div>
            <input type="radio" id="gender2" name="gender" value="female" />
            <label for="gender2">Female</label>
          </div>
          <div>
            <input type="radio" id="gender3" name="gender" value="other" />
            <label for="gender3">Other</label>
          </div>
        </FormGroup>
      </>
    );
    //address for magazine, summary of dues, Members agreement
    const Step3 = () => (
      <>
        <h2>Step 3: Address</h2>
        <div>
          <label htmlFor="address1">Address line 1</label>
          <input type="text" name="address1" required />
        </div>
        <div>
          <label htmlFor="address2">Address line 2</label>
          <input type="text" name="address2" />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input type="text" name="city" />
        </div>
        <div>
          <label htmlFor="stateProvince">State or province</label>
          <input type="text" name="stateProvince" />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input type="text" name="country" />
        </div>
        <div>
          <label htmlFor="postalCode">Postal code</label>
          <input type="text" name="postalCode" />
        </div>
        <div>
          <label htmlFor="homePhone">Home phone number</label>
          <input type="text" name="homePhone" />
        </div>
        <div>
          <label htmlFor="mobilePhone">Mobile phone number</label>
          <input type="text" name="mobilePhone" required />
        </div>
      </>
    );
    const Step4 = () => (
      <>
        <h4>Step 4: Dues</h4>
        <select>
          <option>Starting month</option>
        </select>
        <p>Toastmaster international Dues: </p>
        <p>New member fee: </p>
        <p>Club dues: </p>
        <p>Total payment: </p>
        <div>
          <p>Card information</p>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_s-xclick" />

            <input type="hidden" name="hosted_button_id" value="221" />

            <input
              type="image"
              name="submit"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif"
              alt="PayPal - The safer, easier way to pay online"
              required
            />
            <img
              alt=""
              width="1"
              height="1"
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
            />
          </form>
        </div>
      </>
    );
    const Step5 = () => (
      <>
        <h4>Final Step: Members Agreement</h4>
        <div>
          As a member of Toastmasters International and my club,I promise
          <ul>
            <li>
              <input type="checkbox" />
              To attend club meetings regularly
            </li>
            <li>
              <input type="checkbox" />
              To prepare all of my projects to the best of my ability, basing
              them on the Toastmasters education program
            </li>
            <li>
              <input type="checkbox" />
              To prepare for and fulfill meeting assignments
            </li>
            <li>
              <input type="checkbox" />
              To provide fellow members with helpful, constructive evaluations
            </li>
            <li>
              <input type="checkbox" />
              To help the club maintain the positive, friendly environment
              necessary for all members to learn and grow
            </li>
            <li>
              <input type="checkbox" />
              To serve my club as an officer when called upon to do so
            </li>
            <li>
              <input type="checkbox" />
              To treat my fellow club members and our guests with respect and
              courtesy
            </li>
            <li>
              <input type="checkbox" />
              To bring guests to club meetings so they can see the benefits
              Toastmasters membership offers
            </li>
            <li>
              <input type="checkbox" />
              To adhere to the guidelines and rules for all Toastmasters
              education and recognition programs
            </li>
            <li>
              <input type="checkbox" required />
              To act within Toastmasters core values of integrity, respect,
              service and excellence during the conduct of all Toastmasters
              activities
            </li>
          </ul>
        </div>
        <span>
          By my signature below, I agree to the terms of A Toastmaster’s Promise
          and the Member’s Agreement and Release stated above, and certify that
          I am 18 years of age or older (in compliance with the Toastmasters
          Club Constitution for Clubs of Toastmasters International). I
          acknowledge that my electronic signature on this document is legally
          equivalent to my handwritten signature. Type your name as the
          electronic signature.
        </span>
        <br />
        <input type="text" name="agreement" required />
      </>
    );
    const Complete = () => {
      return (
        <div>
          <p>
            Your application is being proccessed. You may now close this tab.
          </p>
        </div>
      );
    };
    const steps = [
      <Step0 />,
      <Step1 />,
      <Step2 />,
      <Step3 />,
      <Step4 />,
      <Step5 />,
      <Complete />,
    ];
    return (
      <Container>
        <LocalForm onSubmit={this.incrementStep}>
          {steps[this.state.step]}
          {this.state.step < steps.length - 1 ? (
            <Button type="submit" color="success">
              Next Step
            </Button>
          ) : (
            ""
          )}
        </LocalForm>
      </Container>
    );
  }
}
