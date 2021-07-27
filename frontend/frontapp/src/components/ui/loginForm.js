import { Form, Row, Col, Container } from "react-bootstrap";
import Button from '../widgets/GreenButton';
import { useEffect, useState } from "react";
import axios from "axios";


const LoginForm = () => {
const [form, setForm] = useState({
  email: '',
  password: ''
});

const submitForm = (event) => {
  event.preventDefault();
  // const loginInfo = {
  //   email: form.email,
  //   password: form.password
  // }
  // console.log(loginInfo)
  const submitLogin = async () => {
   await axios.post('/auth/login', form)
  }
  submitLogin()
  console.log(form);
}

 

const handleChange = (event) => {
  setForm(state => {
      return {
          ...state,
          [event.target.name]: event.target.value
      }
  })
}

  // const submitForm =  (event) => {
  //   event.preventDefault();
  //   const logIn =  () => {
  //      axios.post('/auth/login', form)
  //     .then( resp => {
  //       alert(resp.data)
  //     })
  //     .catch( err => {
  //       console.log(err);
  //     })
  //   }
  //   logIn();
  // };

  // const handleChange = (event) => {
  //   setForm(state => {
  //     return {
  //       ...state,
  //       [event.target.name]: event.target.value
  //     }
  //   })
  // }
  return (
    <form onSubmit={submitForm}>
    <input
        type='text'
        placeholder='email'
        name='email'
        value={form.email}
        onChange={handleChange}
    />
    <input
        type= 'password'
        placeholder='password'
        name='password'
        value={form.password}
        onChange={handleChange}
    />
    <button type='submit' className='submit-button'>Sign In</button>
</form>
  )

//   return (
//     <Container>
//     <Row>
//       <Col md={6}>
//       <h3 id="orangeTitle">Welcome to <span id="blackTitle"> Baby's </span> </h3>
//             <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
//       </Col>

//       <Col md={6}>
//       <div className="loginForm">
// <Form onSubmit={submitForm} >
//   <Form.Group className="mb-3" controlId="formGroupEmail">
//     <Form.Label>Email</Form.Label>
//     <Form.Control  type="email"  placeholder="Enter email" value={form.email} onChange={handleChange} />
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="formGroupPassword">
//     <Form.Label>Password</Form.Label>
//     <Form.Control  type="password"  placeholder="Password" value={form.password} onChange={handleChange}/>
//   </Form.Group>
//         <Button className={"greenButton"}  type="submit" text={"Log In"} variant={"success"} />
//       </Form>
//     </div>
//       </Col>
//     </Row>
//     </Container>
//   );
};

export default LoginForm;