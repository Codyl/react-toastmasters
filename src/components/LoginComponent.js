import React, { useRef, useState, useContext } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

export default function LoginComponent(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      if (currentUser) {
        console.log(currentUser);
        setLoggedIn(true);
      } else {
        console.log("no user");
      }

      history.push("/");
    } catch (err) {
      setError("Failed to login, try again" + err.message);
      setTimeout(() => setError(null), 2000);
    }

    setLoading(false);
  }

  return (
    <Modal isOpen={props.isModalOpen && !loggedIn} toggle={props.toggleModal}>
      <ModalHeader toggle={props.toggleModal}>Login</ModalHeader>
      {error && <Alert variant="danger">{error}</Alert>}
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required />
          </Form.Group>
          <br />
          <Button disabled={loading} className="w-100" type="submit">
            Login
          </Button>
          <a>Forgot Password?</a>
        </Form>
      </ModalBody>
    </Modal>
  );
}
