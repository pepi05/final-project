import { Col, Row, Form, Container, Figure } from "react-bootstrap";
import Button from '../widgets/GreenButton';
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

const ProfileForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [userId, setUserId] = useState('')
  const [fetchedUser, setFetchedUser] = useState('')
  const [form, setForm] = useState({
    myFile: '' ,
    first_name: '',
    last_name: '',
    email: '',
    birthday:startDate ,
    password: '',
    repeat_password: ''
  } );
  const [userImage, setUserImage] = useState({
    myFile: "",
  });
  
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
            setFetchedUser(data)
            console.log('datickaa', data.myFile);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}, []);

const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

const handleFileUpload = async (e) => {
  const file = e.target.files[0];
  const base64 = await convertToBase64(file);
  setUserImage({ ...userImage, myFile: base64 });
};

const putUpdateUser = async () => {
  await axios.put(`/auth/${userId}`, form)
  .then(response => console.log(response))
}

  const submitForm = async (event) => {
    event.preventDefault()
  await  putUpdateUser() 
  }

  const handleChange = (event) => {
    birthdayChange()
    setForm(state => {
      return {
        ...state,
        [event.target.name]: event.target.value,
        myFile: userImage.myFile,
        
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
                    src={form.myFile || fetchedUser.myFile}
                    roundedCircle
                  />
              </Figure>
              <input  type='file' name='myFile' id="avatar-upload" onChange={handleFileUpload}  />
              <label className="custom-file-label" htmlFor="avatar-upload"> Change avatar </label> 
          </Col>

          <Col xs={12} md={8}>
          <Row className="mb-3">
<Col>
<Form.Label>First Name</Form.Label>
<input
      type='text'
      placeholder={fetchedUser.first_name}
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
      placeholder={fetchedUser.last_name}
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
      placeholder={fetchedUser.email}
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
  <button type='submit' className='submit-button greenButton' variant="primary">Save</button>
  </Col>
  <Col md={2}>

  </Col>
  </Row>
  </Container>
</form>
)
};

export default ProfileForm;