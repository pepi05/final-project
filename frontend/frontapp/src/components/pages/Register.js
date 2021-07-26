import RegisterForm from "../ui/RegisterForm";
import RouteHeader from '../widgets/routeheader';

const Register = () => {
  return (
    <div>
      <RouteHeader title='Register'/>,
      <RegisterForm/>
    </div>
  );
};

export default Register;