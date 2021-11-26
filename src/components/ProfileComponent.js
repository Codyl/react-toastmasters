import Col from "reactstrap/lib/Col";
import Container from "reactstrap/lib/Container";
import Form from "reactstrap/lib/Form";
import FormGroup from "reactstrap/lib/FormGroup";
import Row from "reactstrap/lib/Row";

const Profile = () => {
  const validName = (val) => /[A-Z]+ {1}[A-Z]+/.test(val);
  const validEmail = (val) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
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
        </Col>
        <Col sm={8}>
          <Form className="px-5">
            <FormGroup>
              <label htmlFor="exampleInputEmail1">Full Name</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="exampleInputPassword1">Telephone</label>
              <input
                type="tel"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Telephone"
              />
            </FormGroup>
            <label htmlFor="bio">Bio</label>
            <textarea
              className="form-control"
              name="bio"
              id=""
              cols="30"
              rows="10"
              placeholder="Write your story"></textarea>
            <button type="submit" className="btn btn-success my-4">
              Submit
            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Profile;
