import { Col, Row, Form, Container, Image, Figure } from "react-bootstrap";
import Calendar from "../widgets/Calendar";
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
          console.log('data od fetched user:' , data);
 
           
            if (!response.ok) {
  
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            setUserId(data._id);
            console.log('userot ima Id: ', data._id);
  
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
      console.log('form is:' , form);

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
  <Row>
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
  </Row>
  <Row>
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
    </Row>
  <button type='submit' className='submit-button'>Sign In</button>
  </Col>
  <Col md={2}>

  </Col>
  </Row>
  </Container>
</form>
)





//   return (
//     <Form onSubmit={submitForm}>
//     <Container>
//         <Row>
//           <Col xs={12} md={2} className='avatar-image'>
//               <Figure>
//                   <Figure.Image 
//                     width={171}
//                     height={180}
//                     alt="171x180"
//                     src="../avatar.png"
//                     roundedCircle
//                   />
//               </Figure>
//           <Button className={"whiteButton"} text="CHANGE AVATAR"  variant={"light"} />
//           </Col>
//           <Col xs={12} md={8}>
          
//           <div className="registerForm">
      
//       <Row className="mb-3">
//     <Form.Group as={Col} controlId="formGroupEmail">
//       <Form.Label>First Name</Form.Label>
//       {/* <Form.Control type="text" placeholder="Enter first name" name="first_name" ref={target} onChange={handleChange} /> */}
//       <input
//       type='text'
//       placeholder='First name'
//       name='first_name'
//       value={form.first_name}
//       onChange={handleChange}
//   />
//     </Form.Group>

//     <Form.Group as={Col} controlId="formGroupEmail">
//       <Form.Label>Last Name</Form.Label>
//       {/* <Form.Control type="text" placeholder="Enter last name" name="last_name" ref={target} onChange={handleChange} /> */}
//       <input
//       type='text'
//       placeholder='Last name'
//       name='last_name'
//       value={form.last_name}
//       onChange={handleChange}
//   />
//     </Form.Group>
//   </Row>
//   <Row className="mb-3">
//     <Form.Group as={Col} controlId="formGroupEmail">
//       <Form.Label>Email</Form.Label>
//       {/* <Form.Control type="email" placeholder="Enter email" name="email" ref={target} onChange={handleChange} /> */}
//       <input
//       type='text'
//       placeholder=' Email'
//       name='email'
//       value={form.email}
//       onChange={handleChange}
//   />
//     </Form.Group>
 
//     <Form.Group as={Col} controlId="form-control">
//       <Form.Label>Birthday</Form.Label> 
//       <br/>
//       {/* <Calendar name="birthday" ref={target} onChange={handleChange}/> */}
//       <DatePicker className="inputCal" dateFormat="dd/MM/yyyy" name="birthday" value={startDate} selected={startDate} onChange={(date) => setStartDate(date)} />
//     </Form.Group>

//   </Row>
//   <Row className="mb-3">
//     <Form.Group as={Col} controlId="formGroupEmail">
//       <Form.Label>Password</Form.Label>
//       {/* <Form.Control type="password" placeholder="Enter password" name="password" ref={target} onChange={handleChange} /> */}
//       <input
//       type='password'
//       placeholder=' Password'
//       name='password'
//       value={form.password}
//       onChange={handleChange}
//   />
//     </Form.Group>

//     <Form.Group as={Col} controlId="formGroupEmail">
//       <Form.Label>Repeat Password</Form.Label>
//       {/* <Form.Control type="password" placeholder="Password" name="repeat_password" ref={target} onChange={handleChange} /> */}
//       <input
//       type='password'
//       placeholder=' Password'
//       name='repeat_password'
//       value={form.repeat_password}
//       onChange={handleChange}
//   />
//     </Form.Group>
//   </Row>
//   <br/>
//         <Button  type="submit" className={"greenButton"} text={"save" } variant={"success"} />
        
        
      
//     </div>
//           </Col>
//           <Col md={2}>
//           </Col>
//         </Row>
//         </Container>
//         </Form>
//   );
};

export default ProfileForm;