import { Col, Row, Form, Container, Image, Figure } from "react-bootstrap";
import Calendar from "../widgets/Calendar";
import Button from '../widgets/GreenButton';

const ProfileForm = () => {
  return (
    <Form>
    <Container>
        <Row>
          <Col xs={12} md={2} className='avatar-image'>
              <Figure>
                  <Figure.Image 
                    width={171}
                    height={180}
                    alt="171x180"
                    src="../avatar.png"
                    roundedCircle
                  />
              </Figure>
          <Button className={"whiteButton"} text="CHANGE AVATAR"  variant={"light"} />
          </Col>
          <Col xs={12} md={8}>
          
          <div className="registerForm">
      
      <Row className="mb-3">
    <Form.Group as={Col} controlId="formGroupEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="Enter first name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGroupEmail">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Enter last name" />
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGroupEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
 
    <Form.Group as={Col} controlId="form-control">
      <Form.Label>Birthday</Form.Label> 
      <br/>
      <Calendar/>
    </Form.Group>

  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGroupEmail">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Enter password" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGroupEmail">
      <Form.Label>Repeat Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>
  <br/>
        <Button  type="submit" className={"greenButton"} text={"save" } variant={"success"} />
        
        
      
    </div>
          </Col>
          <Col md={2}>
          </Col>
        </Row>
        </Container>
        </Form>
  );
};

export default ProfileForm;