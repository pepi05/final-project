import LoginForm from "../ui/loginForm";
import RouteHeader from '../widgets/routeheader';

const Login = () => {
  return (
    <div>
      <RouteHeader title='Log In'/>,
      <LoginForm />
    </div>
  );
};

export default Login;