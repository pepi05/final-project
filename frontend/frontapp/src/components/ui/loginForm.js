import { Form, Row, Col, Container } from "react-bootstrap";
import {  useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const LoginForm = () => {
const [form, setForm] = useState({
  email: '',
  password: ''
});
const [redirect, setRedirect] = useState(false);

const submitForm = async (event) => {
  event.preventDefault();
const submitLogin = async () => {
  await axios.post('/auth/login', form)
  .then((response) => {
    console.log('datickaa',response.data.data);
   localStorage.setItem('token', response.data.data)
   window.location.reload();

  })
  .catch(err => console.log(err))
  }
   submitLogin()
   setRedirect(true)
}

  if (redirect) {
    return  <Redirect to="/" />
  }

const handleChange = (event) => {
  setForm(state => {
      return {
          ...state,
          [event.target.name]: event.target.value
      }
  })
}

  return (
    <Container>
    <Row>
      <Col md={6}>
      <h3 id="orangeTitle">Welcome to <span id="blackTitle"> Baby's </span> </h3>
            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
      </Col>

      <Col md={6}>
      <div className="loginForm">
<form onSubmit={submitForm}>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Email</Form.Label>
    <input  type="email"  placeholder="Enter email" name="email" value={form.email} onChange={handleChange} id="formGroupEmail" className="form-control" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <input type="password"  placeholder="Password" name="password" value={form.password} onChange={handleChange} id="formGroupPassword" className="form-control" />
  </Form.Group>
        <button className="greenButton" variant="primary" type="submit">
          Log In
        </button>
      </form>
    </div>
      </Col>
    </Row>
    </Container>
  )
};

export default LoginForm;