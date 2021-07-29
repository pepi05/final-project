import { useState } from "react";
import LoginForm from "../ui/loginForm";
import RouteHeader from '../widgets/routeheader';

const Login = (props) => {


  return (
 
    <div>
      <RouteHeader title='Log In'/>,
      
      <LoginForm user={props.user} setUser={props.setUser} />
    </div>
  );
};

export default Login;