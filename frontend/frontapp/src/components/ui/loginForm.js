import { Form, Row, Col, Container } from "react-bootstrap";
import Button from '../widgets/GreenButton';

const LoginForm = () => {
  return (
    <Container>
    <Row>
      <Col md={6}>
      <h3 id="orangeTitle">Welcome to <span id="blackTitle"> Baby's </span> </h3>
            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
      </Col>

      <Col md={6}>
      <div className="loginForm">
<Form>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" name="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="password" placeholder="Password" />
  </Form.Group>
        <Button className={"greenButton"}  type="submit" text={"Log In"} variant={"success"} />
      </Form>
    </div>
      </Col>
    </Row>
    </Container>
  );
};

export default LoginForm;