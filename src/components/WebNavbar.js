import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap';

const WebNavbar = () => {

  const [show, setShow] = useState(false);
  const [user, setUser] = useState({
    type: "",
    email: ""
  });

  const handleType = (e) => {
    setUser({ ...user, type: e });
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log(user);

  }


  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="/images/logo.png"
              width="180"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Button variant="light" bg="light" onClick={handleShow}>Invite</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Invite to Managy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => { handleSubmit(e) }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                autoFocus
              />
            </Form.Group>
            <DropdownButton onSelect={handleType} title="User Type">
              <Dropdown.Item name="WORKER" eventKey="WORKER" value="WORKER">Worker</Dropdown.Item>
              <Dropdown.Item name="MANAGER" eventKey="MANAGER" value="MANGER">Manager</Dropdown.Item>
            </DropdownButton>
            <br/><br/>
            <input variant="secondary" type="submit" name="submit" value="submit" />
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default WebNavbar