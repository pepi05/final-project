import { Col, Row, Form, Container } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import { Redirect } from "react-router-dom";
import '../../assets/styles/calendar.css'
import "react-datepicker/dist/react-datepicker.css";

const RegisterForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    birthday: '' ,
    password: '',
    repeat_password: ''
  } );
  const [redirect, setRedirect] = useState(false)

  const submitForm = (event) => {
    event.preventDefault()
    const postRegister = async () => {
      await axios.post('/auth/register', form,)
      .then(response => console.log(response.data))
    }
    postRegister()
    setRedirect(true) 
  }

  if(redirect) {
    return <Redirect to="/login"/>
  }

  const handleChange = (event) => {
    birthdayChange()
    setForm(state => {
      return {
        ...state,
        [event.target.name]: event.target.value,
      }  
    })
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
  <Container>
  <Row>
    <Col md={4}>
      <h3 id="orangeTitle">Create your <p id="blackTitle"> account</p></h3 >
      <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
    </Col>
    <Col md={8}>
    
    <div className="registerForm">
<form onSubmit={submitForm}>
<Row className="mb-3">
<Col>
<Form.Label>First Name</Form.Label>
<input
      type='text'
      placeholder='First name'
      name='first_name'
      value={form.first_name}
      onChange={handleChange}
      id='formGroupEmail'
      className="form-control"
  /> 
</Col>

<Col>
<Form.Label>Last Name</Form.Label>
<input
      type= 'text'
      placeholder='Last Name'
      name='last_name'
      value={form.last_name}
      onChange={handleChange}
      id='formGroupEmail'
      className="form-control"
  />
</Col>
</Row>
<Row className="mb-3">
<Col>
<Form.Label>Email</Form.Label>
<input
      type= 'email'
      placeholder='Email'
      name='email'
      value={form.email}
      onChange={handleChange}
      id='formGroupEmail'
      className="form-control"
  />
</Col>

<Col>
<Form.Label>Birthday</Form.Label> 
<br/>
<DatePicker className="inputCal" dateFormat="dd/MM/yyyy" name="birthday" value={startDate} selected={startDate} onChange={(date) => setStartDate(date)} />
</Col>

</Row>
<Row className="mb-3">
<Col>
<Form.Label>Password</Form.Label>
<input
        type= 'password'
        placeholder='password'
        name='password'
        value={form.password}
        onChange={handleChange}
        id='formGroupPassword'
        className="form-control"
    />
</Col>

<Col>
<Form.Label>Repeat Password</Form.Label>
<input
        type= 'password'
        placeholder='Repeat password'
        name='repeat_password'
        value={form.repeat_password}
        onChange={handleChange}
        id='formGroupEmail'
        className="form-control"
    />
</Col>
</Row>
<br/>
  <button className="greenButton" variant="primary" type="submit">
  Create account
  </button>
</form>
</div>
    </Col>
  </Row>
  </Container>
)
}
export default RegisterForm;