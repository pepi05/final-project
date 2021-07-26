import { Col, Row, Form, Container } from "react-bootstrap";
import Calendar from "../widgets/Calendar";
import Button from '../widgets/GreenButton';

const RegisterForm = () => {
  return (
    <Container>
        <Row>
          <Col md={4}>
            <h3 id="orangeTitle">Create your <p id="blackTitle"> account</p></h3 >
            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
          </Col>
          <Col md={8}>
          
          <div className="registerForm">
      <Form>
      <Row className="mb-3">
    <Form.Group as={Col} controlId="formGroupEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" name="firstName" placeholder="Enter first name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGroupEmail">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" name="lastName" placeholder="Enter last name" />
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGroupEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" name="email" placeholder="Enter email" />
    </Form.Group>
 
    <Form.Group as={Col} controlId="form-control">
      <Form.Label>Birthday</Form.Label> 
      <br/>
      <Calendar name="birthday" />
    </Form.Group>

  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGroupEmail">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Enter password" name="password" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGroupEmail">
      <Form.Label>Repeat Password</Form.Label>
      <Form.Control type="password" name="repeatPassword" placeholder="Repeat password" />
    </Form.Group>
  </Row>
  <br/>
        <Button  type="submit" className={"greenButton"} text={"Create account" } variant={"success"} />
        
        
      </Form>
    </div>
          </Col>
        </Row>
        </Container>
  );
};

export default RegisterForm;