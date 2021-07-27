import { Col, Row, Form, Container } from "react-bootstrap";
import Calendar from "../widgets/Calendar";
import Button from '../widgets/GreenButton';
import { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";

const RegisterForm = (props) => {
  const [startDate, setStartDate] = useState(new Date());

  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    birthday: '' ,
    password: '',
    repeat_password: ''
  } );

  

  const submitForm = (event) => {
    event.preventDefault()

    // const registered = {
    //   firstName: form.firstName,
    //   lastName: form.lastName,
    //   email: form.email,
    //   birthday: form.birthday,
    //   password: form.password,
    //   repeatPassword: form.repeatPassword
    // }

    const postRegister = async () => {

   
      await axios.post('/auth/register', form)
      .then(response => console.log(response.data))


    }
    postRegister() 
  }

  

  const handleChange = (event) => {
    birthdayChange()
    setForm(state => {
      return {
        ...state,
        [event.target.name]: event.target.value,
      }  
      
    })
    console.log(form); 
  }

const birthdayChange = () => {
setForm(state => {
  return {
    ...state,
    birthday: startDate.toDateString()
  }
})
}

return (
  <form onSubmit={submitForm}>
  <input
      type='text'
      placeholder='First name'
      name='first_name'
      value={form.first_name}
      onChange={handleChange}
  />
  <input
      type= 'text'
      placeholder='Last Name'
      name='last_name'
      value={form.last_name}
      onChange={handleChange}
  />
  <input
      type= 'email'
      placeholder='Email'
      name='email'
      value={form.email}
      onChange={handleChange}
  />
  <DatePicker className="inputCal" dateFormat="dd/MM/yyyy" name="birthday" value={startDate} selected={startDate} onChange={(date) => setStartDate(date)} />
  <input
        type= 'password'
        placeholder='password'
        name='password'
        value={form.password}
        onChange={handleChange}
    />
    <input
        type= 'password'
        placeholder='Repeat password'
        name='repeat_password'
        value={form.repeat_password}
        onChange={handleChange}
    />
  <button type='submit' className='submit-button'>Sign In</button>
</form>
)

}
export default RegisterForm;
  // console.log(form);
  // console.log(startDate);
 

 /* return (
    <Container>
        <Row>
          <Col md={4}>
            <h3 id="orangeTitle">Create your <p id="blackTitle"> account</p></h3 >
            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
          </Col>
          <Col md={8}>
          
          <div className="registerForm">
      <Form onSubmit={submitForm} method="POST" >
      <Row className="mb-3">
    <Form.Group as={Col} controlId="formGroupEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" name="firstName" value={form.firstName}  placeholder="Enter first name" onChange={handleChange} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGroupEmail">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" name="lastName" value={form.lastName} placeholder="Enter last name" onChange={handleChange} />
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGroupEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" name="email" value={form.email} placeholder="Enter email" onChange={handleChange} />
    </Form.Group>
 
    <Form.Group as={Col} controlId="form-control">
      <Form.Label>Birthday</Form.Label> 
      <br/>
      {/* <Calendar name="birthday" value={startDate} onChange={handleChange} /> */
     /* <DatePicker className="inputCal" dateFormat="dd/MM/yyyy" name="birthday" value={startDate} selected={startDate} onChange={(date) => setStartDate(date)} />
    </Form.Group>

  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGroupEmail">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" name="password" value={form.password} placeholder="Enter password" onChange={handleChange} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGroupEmail">
      <Form.Label>Repeat Password</Form.Label>
      <Form.Control type="password" name="repeatPassword" value={form.repeatPassword} placeholder="Repeat password" onChange={handleChange} />
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
  */


