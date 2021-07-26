import { Button } from "bootstrap";
import ProfileForm from "../ui/ProfileForm";
import RouteHeader from '../widgets/routeheader';

const MyProfile = () => {
  return (
    <div>
      <RouteHeader title='My Profile'/>,
      <ProfileForm />
    </div>
  );
};

export default MyProfile;