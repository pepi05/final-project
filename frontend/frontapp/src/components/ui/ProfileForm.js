import { Col, Row, Form, Container, Figure } from "react-bootstrap";
import Button from '../widgets/GreenButton';
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";

const ProfileForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    birthday: '' ,
    password: '',
    repeat_password: ''
  } );
  const [userId, setUserId] = useState('')
  
  useEffect(() => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
       
    };
    fetch('auth/user', requestOptions)
        .then(async response => {
            const data = await response.json();
 
            if (!response.ok) {
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }
            setUserId(data._id);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}, []);

  const submitForm = (event) => {
    event.preventDefault()
    const postRegister = async () => {
      await axios.put(`/auth/${userId}`, form)
      .then(response => console.log(response))
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
  <button type='submit' className='submit-button'>Sign In</button>
  </Col>
  <Col md={2}>

  </Col>
  </Row>
  </Container>
</form>
)
};

export default ProfileForm;